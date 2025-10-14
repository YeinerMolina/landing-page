import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeProjects } from './home-projects';

describe('HomeProjects', () => {
  let component: HomeProjects;
  let fixture: ComponentFixture<HomeProjects>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeProjects]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeProjects);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all projects', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const projectElements = compiled.querySelectorAll('article');
    expect(projectElements.length).toBe(component.projects.length);
  });

  it('should display project titles', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const titleElements = compiled.querySelectorAll('h3');
    expect(titleElements.length).toBe(component.projects.length);
  });

  it('should have case study links', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const linkElements = compiled.querySelectorAll('a');
    expect(linkElements.length).toBe(component.projects.length);
  });
});