import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Copyright } from './copyright';

describe('Copyright', () => {
  let fixture: ComponentFixture<Copyright>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Copyright],
    }).compileComponents();

    fixture = TestBed.createComponent(Copyright);
    fixture.detectChanges();
  });

  it('should create', () => {
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });

  it('should render current year and static content', () => {
    const year = new Date().getFullYear();
    const el: HTMLElement = fixture.nativeElement;
    expect(el.textContent).toContain(`${year}`);
    expect(el.textContent).toContain('Landing Page');
    expect(el.textContent).toContain('Todos los derechos reservados');
  });
});