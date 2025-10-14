import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Service {
  id: number;
  title: string;
  description: string;
}

/**
 * Component that displays the services section
 */
@Component({
  selector: 'home-services',
  standalone: true,
  templateUrl: './home-services.html',
  styleUrl: './home-services.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeServices {
  readonly services: Service[] = [
    {
      id: 1,
      title: 'Web Application Development',
      description: 'SPA, SSR, PWA. Focus on performance and maintainability.'
    },
    {
      id: 2,
      title: 'APIs & Integrations',
      description: 'Design and implement REST/GraphQL APIs and third-party integrations.'
    },
    {
      id: 3,
      title: 'Cloud & DevOps',
      description: 'CI/CD pipelines, Docker, AWS deployments, monitoring.'
    },
    {
      id: 4,
      title: 'Maintenance & Optimization',
      description: 'Performance optimization, code refactoring, and system maintenance.'
    }
  ];
}