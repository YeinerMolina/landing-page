import { ChangeDetectionStrategy, Component } from '@angular/core';

/**
 * Component that displays the about section with developer information
 */
@Component({
  selector: 'home-about',
  standalone: true,
  templateUrl: './home-about.html',
  styleUrl: './home-about.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeAbout {
  readonly aboutText = `I'm a Full-Stack developer focused on end-to-end product delivery. I
    design interfaces, build robust backends, and ship cloud-hosted systems
    that scale. I work with teams or directly with founders to move from
    prototype to production quickly.`;
}
