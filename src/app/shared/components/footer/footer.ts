import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Copyright } from '../copyright/copyright';

/**
 * Componente Footer reutilizable que contiene información de contacto y enlaces del sitio
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Copyright],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class Footer {

}