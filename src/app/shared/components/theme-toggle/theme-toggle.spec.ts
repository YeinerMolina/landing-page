import { ButtonModule } from 'primeng/button';

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { computed, signal } from '@angular/core';

import { ThemeToggle } from './theme-toggle';
import { ThemeStore } from '../../../core/services/theme.store';
import { ThemeMode } from '../../../core/services';

// Mock ThemeStore to have deterministic behavior in tests
class MockThemeStore {
  private readonly _currentTheme = signal<ThemeMode>(ThemeMode.Dark);
  public readonly currentTheme = this._currentTheme.asReadonly();
  public readonly isDarkMode = computed(
    () => this._currentTheme() === ThemeMode.Dark
  );
  public toggleTheme(): ThemeMode {
    const next = this.isDarkMode() ? ThemeMode.Light : ThemeMode.Dark;
    this._currentTheme.set(next);
    return next;
  }
  // Helper for tests
  public setTheme(theme: ThemeMode): void {
    this._currentTheme.set(theme);
  }
}

describe('ThemeToggle', () => {
  let fixture: ComponentFixture<ThemeToggle>;
  let mockStore: MockThemeStore;

  beforeEach(async () => {
    mockStore = new MockThemeStore();
    await TestBed.configureTestingModule({
      imports: [ThemeToggle, ButtonModule],
      providers: [{ provide: ThemeStore, useValue: mockStore }],
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeToggle);
    fixture.detectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should default to dark mode via store', () => {
    expect(mockStore.isDarkMode()).toBeTrue();
  });

  it('should toggle theme on button click', () => {
    // Start in Dark
    expect(mockStore.isDarkMode()).toBeTrue();

    const buttonDe = fixture.debugElement.query(By.css('p-button'));
    buttonDe.nativeElement.click();
    fixture.detectChanges();

    expect(mockStore.isDarkMode()).toBeFalse();
  });

  it('should update accessibility labels according to theme', () => {
    const buttonDe = fixture.debugElement.query(By.css('p-button'));
    // In dark mode initially
    expect(buttonDe.nativeElement.getAttribute('aria-label')).toBe(
      'Cambiar a modo claro'
    );
    expect(buttonDe.nativeElement.getAttribute('title')).toBe(
      'Cambiar a modo claro'
    );

    // Switch to light mode
    mockStore.setTheme(ThemeMode.Light);
    fixture.detectChanges();

    expect(buttonDe.nativeElement.getAttribute('aria-label')).toBe(
      'Cambiar a modo oscuro'
    );
    expect(buttonDe.nativeElement.getAttribute('title')).toBe(
      'Cambiar a modo oscuro'
    );
  });

  it('should apply correct CSS classes based on theme', () => {
    const buttonDe = fixture.debugElement.query(By.css('p-button'));

    // Dark mode classes
    expect(buttonDe.nativeElement.classList.contains('dark-mode')).toBeTrue();
    expect(buttonDe.nativeElement.classList.contains('light-mode')).toBeFalse();

    // Light mode classes after toggle
    mockStore.toggleTheme();
    fixture.detectChanges();

    expect(buttonDe.nativeElement.classList.contains('dark-mode')).toBeFalse();
    expect(buttonDe.nativeElement.classList.contains('light-mode')).toBeTrue();
  });
});
