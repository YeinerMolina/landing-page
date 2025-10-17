import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Tech } from './interface/tech.interface';

/**
 * Component that displays the trusted tools and platforms section
 */
@Component({
  selector: 'home-tech-stack',
  standalone: true,
  templateUrl: './home-tech-stack.html',
  styleUrl: './home-tech-stack.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeTechStack {
  readonly technologies: Tech[] = [
    { name: 'Angular', icon: '/framework-icons/angular.webp' },
    {
      name: 'Angular Material',
      icon: '/framework-icons/angular_material.webp',
    },
    { name: 'PrimeNG', icon: '/framework-icons/primeng.webp' },
    { name: 'Node.js', icon: '/framework-icons/node_js.webp' },
    { name: 'ExpressJs', icon: '/framework-icons/express.webp' },
    { name: 'Azure Devops', icon: '/framework-icons/azure_devops.webp' },
    { name: 'SQL Server', icon: '/framework-icons/sql_server.webp' },
    { name: 'Postgres', icon: '/framework-icons/postgres.webp' },
    { name: 'Docker', icon: '/framework-icons/docker.webp' },
    { name: 'Jest', icon: '/framework-icons/jest.webp' },
    { name: 'Playwright', icon: '/framework-icons/playwright.webp' },
  ];
}
