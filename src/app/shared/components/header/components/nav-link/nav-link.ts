import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'header-nav-link',
  standalone: true,
  imports: [RippleModule],
  templateUrl: './nav-link.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavLinkAtom {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) href!: string;
  @Input({ required: true }) icon!: string; // e.g., 'pi pi-home'
  @Output() onClick = new EventEmitter<void>();
}
