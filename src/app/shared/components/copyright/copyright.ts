import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'copyright',
  standalone: true,
  templateUrl: './copyright.html',
  styleUrl: './copyright.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Copyright {}
