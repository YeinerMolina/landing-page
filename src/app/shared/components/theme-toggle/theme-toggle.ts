import { ButtonModule } from 'primeng/button';

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, computed, input, output } from '@angular/core';
import { ThemeMode } from '../../../core/services/theme.store';

@Component({
  selector: 'theme-toggle',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThemeToggle {
  // Input signal con valor por defecto 'dark'
  theme = input<ThemeMode>(ThemeMode.Dark);
  
  // Output signal para two-way binding
  themeChange = output<void>();
  
  // Signal computado para verificar si es modo oscuro
  protected isDarkMode = computed(() => this.theme() === ThemeMode.Dark);

  /**
   * Solo emite el evento de cambio de tema
   */
  protected toggleTheme(): void {
    this.themeChange.emit();
  }
}