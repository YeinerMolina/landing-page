import { Component, ChangeDetectionStrategy } from '@angular/core';

/**
 * Component that displays the trusted tools and platforms section
 */
@Component({
  selector: 'home-tech-stack',
  standalone: true,
  templateUrl: './home-tech-stack.html',
  styleUrl: './home-tech-stack.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeTechStack {
  readonly technologies = [
    'Angular',
    'React',
    'Node.js',
    'AWS',
    'Postgres',
    'Docker'
  ];
}