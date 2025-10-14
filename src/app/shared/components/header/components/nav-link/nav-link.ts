import { RippleModule } from 'primeng/ripple';

import { NgClass } from '@angular/common';
import {
    ChangeDetectionStrategy, Component, EventEmitter, input, Input, output, Output
} from '@angular/core';

@Component({
  selector: 'header-nav-link',
  standalone: true,
  imports: [RippleModule, NgClass],
  templateUrl: './nav-link.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavLink {
  label = input.required<string>();
  href = input.required<string>();
  icon = input.required<string>();
  active = input<boolean>(false);
  onClick = output<void>();
}
