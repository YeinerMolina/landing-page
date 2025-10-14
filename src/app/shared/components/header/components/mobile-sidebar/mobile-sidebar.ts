import { ButtonModule } from 'primeng/button';
import { DrawerModule } from 'primeng/drawer';
import { RippleModule } from 'primeng/ripple';

import { ChangeDetectionStrategy, Component, model, output } from '@angular/core';

import { MobileSidebarContent } from '../mobile-sidebar-content/mobile-sidebar-content';
import { NavLink } from '../nav-link/nav-link';
import { ThemeToggleRow } from '../theme-toggle-row/theme-toggle-row';

@Component({
  selector: 'header-mobile-sidebar',
  standalone: true,
  imports: [DrawerModule, RippleModule, MobileSidebarContent],
  templateUrl: './mobile-sidebar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileSidebarOrganism {
  visible = model<boolean>(false);

  // Evento para notificar cierre al padre
  close = output<void>();
}
