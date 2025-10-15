import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';

import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ThemeToggle } from '../theme-toggle/theme-toggle';
import { MobileSidebarOrganism } from './components/mobile-sidebar/mobile-sidebar';

/**
 * Componente Header reutilizable que contiene la navegación principal de la aplicación
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    ButtonModule,
    RippleModule,
    ThemeToggle,
    MobileSidebarOrganism,
    RouterModule,
  ],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Header {
  protected sidebarVisible = signal(false);
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
