import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { RippleModule } from 'primeng/ripple';

import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';

import { ThemeStore } from '../../../core/services/theme.store';
import { ThemeToggle } from '../theme-toggle/theme-toggle';

/**
 * Componente Header reutilizable que contiene la navegación principal de la aplicación
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, DrawerModule, RippleModule, ThemeToggle],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  private readonly themeStore = inject(ThemeStore);
  
  protected sidebarVisible = signal(false);
  
  // Signal del tema actual desde el store
  protected readonly currentTheme = this.themeStore.currentTheme;

  protected toggleTheme(){
    this.themeStore.toggleTheme();
  }

  /**
   * Alterna la visibilidad del sidebar móvil
   */
  protected toggleSidebar(): void {
    this.sidebarVisible.update((value) => !value);
  }

  /**
   * Cierra el sidebar móvil
   */
  protected closeSidebar(): void {
    this.sidebarVisible.set(false);
  }
}