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
    { name: 'Angular', icon: '/icons/angular.webp' },
    { name: 'Angular Material', icon: '/icons/angular_material.webp' },
    { name: 'PrimeNG', icon: '/icons/primeng.webp' },
    { name: 'Node.js', icon: '/icons/node_js.webp' },
    { name: 'ExpressJs', icon: '/icons/express.webp' },
    { name: 'Azure Devops', icon: '/icons/azure_devops.webp' },
    { name: 'SQL Server', icon: '/icons/sql_server.webp' },
    { name: 'Postgres', icon: '/icons/postgres.webp' },
    { name: 'Docker', icon: '/icons/docker.webp' },
    { name: 'Jest', icon: '/icons/jest.webp' },
    { name: 'Playwright', icon: '/icons/playwright.webp' },
  ];
}
