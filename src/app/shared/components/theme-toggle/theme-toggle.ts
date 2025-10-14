import { ButtonModule } from 'primeng/button';

import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ThemeStore } from '../../../core/services/theme.store';

@Component({
  selector: 'theme-toggle',
  standalone: true,
  imports: [CommonModule, ButtonModule],
  templateUrl: './theme-toggle.html',
  styleUrl: './theme-toggle.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggle {
  private readonly themeStore = inject(ThemeStore);
  
  // Signal computado proveniente del ThemeStore
  protected readonly isDarkMode = this.themeStore.isDarkMode;

  /**
   * Solo emite el evento de cambio de tema
   */
  protected toggleTheme(): void {
    this.themeStore.toggleTheme();
  }
}
