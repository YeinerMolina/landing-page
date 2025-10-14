import { ButtonModule } from 'primeng/button';

import { ChangeDetectionStrategy, Component, output } from '@angular/core';

import { NavLink } from '../nav-link/nav-link';
import { ThemeToggleRow } from '../theme-toggle-row/theme-toggle-row';
import { Copyright } from '../../../copyright/copyright';

@Component({
  selector: 'mobile-sidebar-content',
  standalone: true,
  imports: [NavLink, ThemeToggleRow, ButtonModule, Copyright],
  templateUrl: './mobile-sidebar-content.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileSidebarContent {
  close = output<void>();
}
