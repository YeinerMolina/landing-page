import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { Copyright } from '../copyright/copyright';

/**
 * Componente Footer reutilizable que contiene información de contacto y enlaces del sitio
 */
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [Copyright, RouterModule],
  templateUrl: './footer.html',
  styleUrl: './footer.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Footer {}
