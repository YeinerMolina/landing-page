import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ThemeToggle } from '../../../theme-toggle/theme-toggle';

@Component({
  selector: 'header-theme-toggle-row',
  standalone: true,
  imports: [ThemeToggle],
  templateUrl: './theme-toggle-row.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleRow {}
