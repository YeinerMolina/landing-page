import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  input,
  Input,
  output,
  Output,
} from '@angular/core';
import { ThemeToggle } from '../../../theme-toggle/theme-toggle';
import { ThemeMode } from '../../../../../core/services';

@Component({
  selector: 'header-theme-toggle-row',
  standalone: true,
  imports: [ThemeToggle],
  templateUrl: './theme-toggle-row.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ThemeToggleRow {
  theme = input.required<ThemeMode>();
  isDarkMode = input<boolean>(false);
  themeChange = output<void>();
}
