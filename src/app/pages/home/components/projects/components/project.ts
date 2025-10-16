import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, input, Input } from '@angular/core';

import { ProjectModel } from '../interfaces/projects.interface';

@Component({
  selector: 'project',
  standalone: true,
  templateUrl: './project.html',
  styleUrl: './project.css',
  imports: [CommonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectComponent {
  project = input.required<ProjectModel>();
}
