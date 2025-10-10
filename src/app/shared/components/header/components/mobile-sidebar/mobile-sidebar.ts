import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
  input,
  model,
  output,
} from '@angular/core';
import { DrawerModule } from 'primeng/drawer';
import { RippleModule } from 'primeng/ripple';
import { ButtonModule } from 'primeng/button';
import { NavLinkAtom } from '../nav-link/nav-link';
import { ThemeToggleRow } from '../theme-toggle-row/theme-toggle-row';
import { ThemeMode } from '../../../../../core/services';

@Component({
  selector: 'header-mobile-sidebar',
  standalone: true,
  imports: [
    DrawerModule,
    RippleModule,
    ButtonModule,
    NavLinkAtom,
    ThemeToggleRow,
  ],
  templateUrl: './mobile-sidebar.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MobileSidebarOrganism {
  visible = model<boolean>(false);
  theme = input.required<ThemeMode>();
  isDarkMode = input<boolean>(false);
  close = output<void>();
  themeChange = output<void>();
}
