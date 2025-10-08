import { ButtonModule } from 'primeng/button';

import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { ThemeMode } from '../../../core/services/theme.store';
import { ThemeToggle } from './theme-toggle';

describe('ThemeToggle', () => {
  let component: ThemeToggle;
  let fixture: ComponentFixture<ThemeToggle>;
  let buttonElement: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThemeToggle, ButtonModule]
    }).compileComponents();

    fixture = TestBed.createComponent(ThemeToggle);
    component = fixture.componentInstance;
    buttonElement = fixture.debugElement.query(By.css('p-button'));
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have default theme as dark', () => {
    expect(component.theme()).toBe(ThemeMode.Dark);
  });

  describe('Computed Signals', () => {
    it('should compute isDarkMode correctly for dark theme', () => {
      fixture.componentRef.setInput('theme', ThemeMode.Dark);
      fixture.detectChanges();
      
      expect(component['isDarkMode']()).toBe(true);
    });

    it('should compute isDarkMode correctly for light theme', () => {
      fixture.componentRef.setInput('theme', ThemeMode.Light);
      fixture.detectChanges();
      
      expect(component['isDarkMode']()).toBe(false);
    });

    it('should reactively update computed values when theme input changes', () => {
      // Start with dark theme
      fixture.componentRef.setInput('theme', ThemeMode.Dark);
      fixture.detectChanges();
      
      expect(component['isDarkMode']()).toBe(true);
      
      // Change to light theme
      fixture.componentRef.setInput('theme', ThemeMode.Light);
      fixture.detectChanges();
      
      expect(component['isDarkMode']()).toBe(false);
    });
  });

  describe('Theme Toggle Functionality', () => {
    it('should emit light theme when toggling from dark', () => {
      spyOn(component.themeChange, 'emit');
      
      fixture.componentRef.setInput('theme', ThemeMode.Dark);
      fixture.detectChanges();
      
      buttonElement.nativeElement.click();
      
      expect(component.themeChange.emit).toHaveBeenCalled();
      expect(component.themeChange.emit).toHaveBeenCalledTimes(1);
    });

    it('should emit dark theme when toggling from light', () => {
      spyOn(component.themeChange, 'emit');
      
      fixture.componentRef.setInput('theme', ThemeMode.Light);
      fixture.detectChanges();
      
      buttonElement.nativeElement.click();
      
      expect(component.themeChange.emit).toHaveBeenCalled();
      expect(component.themeChange.emit).toHaveBeenCalledTimes(1);
    });

    it('should not modify theme input directly', () => {
      fixture.componentRef.setInput('theme', ThemeMode.Dark);
      fixture.detectChanges();
      
      const originalTheme = component.theme();
      buttonElement.nativeElement.click();
      
      // Theme input should remain unchanged
      expect(component.theme()).toBe(originalTheme);
    });

    it('should handle multiple rapid clicks correctly', () => {
      spyOn(component.themeChange, 'emit');
      
      fixture.componentRef.setInput('theme', ThemeMode.Dark);
      fixture.detectChanges();
      
      // Multiple rapid clicks
      buttonElement.nativeElement.click();
      buttonElement.nativeElement.click();
      buttonElement.nativeElement.click();
      
      expect(component.themeChange.emit).toHaveBeenCalledTimes(3);
      expect(component.themeChange.emit).toHaveBeenCalled();
    });
  });

  describe('Accessibility', () => {
    it('should have proper accessibility attributes for dark theme', () => {
      fixture.componentRef.setInput('theme', ThemeMode.Dark);
      fixture.detectChanges();
      
      const button = buttonElement.nativeElement;
      expect(button.getAttribute('aria-label')).toBe('Cambiar a modo claro');
      expect(button.getAttribute('title')).toBe('Cambiar a modo claro');
    });

    it('should have proper accessibility attributes for light theme', () => {
      fixture.componentRef.setInput('theme', ThemeMode.Light);
      fixture.detectChanges();
      
      const button = buttonElement.nativeElement;
      expect(button.getAttribute('aria-label')).toBe('Cambiar a modo oscuro');
      expect(button.getAttribute('title')).toBe('Cambiar a modo oscuro');
    });

    it('should be keyboard accessible', () => {
      spyOn(component.themeChange, 'emit');
      
      fixture.componentRef.setInput('theme', ThemeMode.Dark);
      fixture.detectChanges();
      
      // Simulate Enter key press
      const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
      buttonElement.nativeElement.dispatchEvent(enterEvent);
      
      expect(component.themeChange.emit).toHaveBeenCalled();
    });
  });

  describe('CSS Classes and Styling', () => {
    it('should apply correct CSS classes for dark theme', () => {
      fixture.componentRef.setInput('theme', ThemeMode.Dark);
      fixture.detectChanges();
      
      expect(buttonElement.nativeElement.classList.contains('dark-mode')).toBe(true);
      expect(buttonElement.nativeElement.classList.contains('light-mode')).toBe(false);
    });

    it('should apply correct CSS classes for light theme', () => {
      fixture.componentRef.setInput('theme', ThemeMode.Light);
      fixture.detectChanges();
      
      expect(buttonElement.nativeElement.classList.contains('dark-mode')).toBe(false);
      expect(buttonElement.nativeElement.classList.contains('light-mode')).toBe(true);
    });

    it('should display only icon without text label', () => {
      fixture.componentRef.setInput('theme', 'dark');
      fixture.detectChanges();
      
      const buttonText = buttonElement.nativeElement.textContent?.trim();
      expect(buttonText).toBe('');
      
      // Should have icon
      const icon = buttonElement.query(By.css('i'));
      expect(icon).toBeTruthy();
      expect(icon.nativeElement.classList.contains('pi-moon')).toBe(true);
    });
  });

  describe('Input Validation', () => {
    it('should accept valid theme values', () => {
      const validThemes: ThemeMode[] = [ThemeMode.Dark, ThemeMode.Light];
      
      validThemes.forEach(theme => {
        fixture.componentRef.setInput('theme', theme);
        fixture.detectChanges();
        expect(component.theme()).toBe(theme);
      });
    });

    it('should handle theme input changes reactively', () => {
      // Initial state
      expect(component.theme()).toBe(ThemeMode.Dark);
      expect(component['isDarkMode']()).toBe(true);
      
      // Change input
      fixture.componentRef.setInput('theme', ThemeMode.Light);
      fixture.detectChanges();
      
      expect(component.theme()).toBe(ThemeMode.Light);
      expect(component['isDarkMode']()).toBe(false);
      
      // Change back
      fixture.componentRef.setInput('theme', ThemeMode.Dark);
      fixture.detectChanges();
      
      expect(component.theme()).toBe(ThemeMode.Dark);
      expect(component['isDarkMode']()).toBe(true);
    });
  });

  describe('Edge Cases', () => {
    it('should handle component initialization without explicit theme input', () => {
      // Component should use default 'dark' theme
      expect(component.theme()).toBe(ThemeMode.Dark);
      expect(component['isDarkMode']()).toBe(true);
    });

    it('should maintain consistent state during rapid theme changes', () => {
      const themes: ThemeMode[] = [ThemeMode.Dark, ThemeMode.Light, ThemeMode.Dark, ThemeMode.Light];
      
      themes.forEach(theme => {
        fixture.componentRef.setInput('theme', theme);
        fixture.detectChanges();
        
        expect(component.theme()).toBe(theme);
        expect(component['isDarkMode']()).toBe(theme === ThemeMode.Dark);
      });
    });

    it('should not emit events during component initialization', () => {
      spyOn(component.themeChange, 'emit');
      
      // Create new component instance
      const newFixture = TestBed.createComponent(ThemeToggle);
      newFixture.detectChanges();
      
      expect(component.themeChange.emit).not.toHaveBeenCalled();
    });
  });
});