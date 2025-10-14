import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeServices } from './home-services';

describe('HomeServices', () => {
  let component: HomeServices;
  let fixture: ComponentFixture<HomeServices>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeServices]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeServices);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display all services', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const serviceElements = compiled.querySelectorAll('.p-5');
    expect(serviceElements.length).toBe(component.services.length);
  });

  it('should display service titles', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const titleElements = compiled.querySelectorAll('h4');
    expect(titleElements.length).toBe(component.services.length);
  });

  it('should display service descriptions', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    const descriptionElements = compiled.querySelectorAll('.text-gray-600');
    expect(descriptionElements.length).toBe(component.services.length);
  });
});