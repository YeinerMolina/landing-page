import { Component, ChangeDetectionStrategy } from '@angular/core';

interface Project {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  caseStudyUrl: string;
}

/**
 * Component that displays the featured projects section
 */
@Component({
  selector: 'home-projects',
  standalone: true,
  templateUrl: './home-projects.html',
  styleUrl: './home-projects.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HomeProjects {
  readonly projects: Project[] = [
    {
      id: 1,
      title: 'Project Name — SaaS Dashboard',
      description: 'Built an Angular dashboard and Node API. Reduced page load time by 40% and improved CI/CD with Docker and AWS.',
      imageUrl: '/path/to/screenshot1.jpg',
      imageAlt: 'Project 1',
      caseStudyUrl: '#'
    },
    {
      id: 2,
      title: 'Project Name — E-commerce Platform',
      description: 'Developed a full-stack e-commerce solution with Angular frontend and Node.js backend.',
      imageUrl: '/path/to/screenshot2.jpg',
      imageAlt: 'Project 2',
      caseStudyUrl: '#'
    },
    {
      id: 3,
      title: 'Project Name — Mobile App',
      description: 'Created a cross-platform mobile application using modern web technologies.',
      imageUrl: '/path/to/screenshot3.jpg',
      imageAlt: 'Project 3',
      caseStudyUrl: '#'
    }
  ];
}