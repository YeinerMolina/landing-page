import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { RouterModule } from '@angular/router';

import { ChangeDetectionStrategy, Component, output } from '@angular/core';

@Component({
  selector: 'home-hero-section',
  standalone: true,
  imports: [ButtonModule, RippleModule, RouterModule],
  templateUrl: './hero-section.html',
  styleUrl: './hero-section.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroSection {}
