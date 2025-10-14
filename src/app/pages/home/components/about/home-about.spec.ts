import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeAbout } from './home-about';

describe('HomeAbout', () => {
  let component: HomeAbout;
  let fixture: ComponentFixture<HomeAbout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeAbout]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeAbout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display about text', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const aboutText = compiled.querySelector('.text-gray-700')?.textContent;
    expect(aboutText?.trim()).toContain('Full-Stack developer');
  });

  it('should display technologies', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const techText = compiled.querySelector('.text-gray-600')?.textContent;
    expect(techText).toContain('Technologies:');
  });
});