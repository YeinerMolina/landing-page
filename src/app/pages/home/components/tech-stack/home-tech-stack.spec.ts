import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeTechStack } from './home-tech-stack';

describe('HomeTechStack', () => {
  let component: HomeTechStack;
  let fixture: ComponentFixture<HomeTechStack>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeTechStack]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeTechStack);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all technologies', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const techElements = compiled.querySelectorAll('.text-gray-700');
    expect(techElements.length).toBe(component.technologies.length);
  });
});