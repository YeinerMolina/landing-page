import { isPlatformBrowser } from '@angular/common';
import {
  computed,
  inject,
  Injectable,
  PLATFORM_ID,
  signal,
} from '@angular/core';

export enum ThemeMode {
  Dark = 'dark',
  Light = 'light',
}

/**
 * Servicio centralizado para el manejo de temas de la aplicación
 */
@Injectable({
  providedIn: 'root',
})
export class ThemeStore {
  private readonly THEME_STORAGE_KEY = 'app-theme';
  private readonly platformId = inject(PLATFORM_ID);

  // Signal interno para el tema actual
  private readonly _currentTheme = signal<ThemeMode>(this.getInitialTheme());

  // Signal público de solo lectura para el tema actual
  readonly currentTheme = this._currentTheme.asReadonly();

  // Signal computado para verificar si es modo oscuro
  readonly isDarkMode = computed(() => this._currentTheme() === ThemeMode.Dark);

  // Signal computado para verificar si es modo claro
  readonly isLightMode = computed(
    () => this._currentTheme() === ThemeMode.Light
  );

  /**
   * Cambia el tema actual
   */
  setTheme(theme: ThemeMode): void {
    this._currentTheme.set(theme);
    if (isPlatformBrowser(this.platformId)) {
      const theme = this._currentTheme();
      localStorage.setItem(this.THEME_STORAGE_KEY, theme);
      this.applyThemeToDocument(theme);
    }
  }

  /**
   * Alterna entre modo oscuro y claro
   */
  toggleTheme(): ThemeMode {
    const newTheme = this.isDarkMode() ? ThemeMode.Light : ThemeMode.Dark;
    this.setTheme(newTheme);
    return newTheme;
  }

  /**
   * Obtiene el tema inicial
   */
  private getInitialTheme(): ThemeMode {
    if (isPlatformBrowser(this.platformId)) {
      const theme =
        this.loadThemeFromStorage() ?? this.getSystemThemePreference();
      this.applyThemeToDocument(theme);
      return theme;
    }
    return ThemeMode.Dark;
  }

  /**
   * Carga el tema desde localStorage
   */
  private loadThemeFromStorage(): ThemeMode | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    try {
      const stored = localStorage.getItem(this.THEME_STORAGE_KEY);
      return [ThemeMode.Dark, ThemeMode.Light].includes(stored as ThemeMode)
        ? (stored as ThemeMode)
        : null;
    } catch {
      return null;
    }
  }

  /**
   * Obtiene la preferencia del sistema
   */
  private getSystemThemePreference(): ThemeMode {
    if (isPlatformBrowser(this.platformId) && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches
        ? ThemeMode.Dark
        : ThemeMode.Light;
    }
    return ThemeMode.Dark;
  }

  /**
   * Aplica el tema al documento
   */
  private applyThemeToDocument(theme: ThemeMode): void {
    if (isPlatformBrowser(this.platformId)) {
      const root = document.documentElement;
      root.classList.remove(ThemeMode.Dark, ThemeMode.Light);
      root.classList.add(theme);
      root.setAttribute('data-theme', theme);
    }
  }

  /**
   * Resetea al tema del sistema
   */
  resetToSystemPreference(): void {
    if (isPlatformBrowser(this.platformId)) {
      const systemTheme = this.getSystemThemePreference();
      this.setTheme(systemTheme);
      localStorage.removeItem(this.THEME_STORAGE_KEY);
    }
  }

  /**
   * Limpia el tema almacenado
   */
  clearStoredTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem(this.THEME_STORAGE_KEY);
    }
  }
}
