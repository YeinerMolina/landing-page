import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';

import { ChangeDetectionStrategy, Component } from '@angular/core';

import { HomeAbout } from './components/about/home-about';
import { HeroSection } from './components/hero-section/hero-section';
import { HomeProjects } from './components/projects/home-projects';
import { HomeServices } from './components/services/home-services';
import { HomeTechStack } from './components/tech-stack/home-tech-stack';

@Component({
  selector: 'app-home',
  imports: [
    ButtonModule,
    CardModule,
    InputTextModule,
    RippleModule,
    HeroSection,
    HomeAbout,
    HomeProjects,
    HomeServices,
  ],
  templateUrl: './home.html',
  styleUrl: './home.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Home {}
