import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroSection } from './hero-section';

describe('HeroSection', () => {
  let component: HeroSection;
  let fixture: ComponentFixture<HeroSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeroSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render headline and subheadline', () => {
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain('Building, Scaling, and Launching Modern Web Applications.');
    expect(el.textContent).toContain('Full-Stack Freelance Developer crafting fast, reliable, and maintainable solutions for businesses and startups.');
  });

  it('should emit viewWork on CTA click', () => {
    spyOn(component.viewWork, 'emit');
    const button: HTMLElement | null = fixture.nativeElement.querySelector('p-button');
    expect(button).toBeTruthy();
    button!.dispatchEvent(new Event('click'));
    expect(component.viewWork.emit).toHaveBeenCalled();
  });
});
