import { Component, ChangeDetectionStrategy, signal } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { RippleModule } from 'primeng/ripple';

/**
 * Componente Header reutilizable que contiene la navegación principal de la aplicación
 */
@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonModule, DrawerModule, RippleModule],
  templateUrl: './header.html',
  styleUrl: './header.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Header {
  // Signal para controlar la visibilidad del sidebar
  sidebarVisible = signal(false);

  /**
   * Alterna la visibilidad del sidebar móvil
   */
  toggleSidebar(): void {
    this.sidebarVisible.update((value) => !value);
  }

  /**
   * Cierra el sidebar móvil
   */
  closeSidebar(): void {
    this.sidebarVisible.set(false);
  }
}