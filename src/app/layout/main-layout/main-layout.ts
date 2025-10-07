import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header, Footer } from '../../shared/components';

@Component({
  selector: 'app-main-layout',
  standalone: true,
  imports: [RouterOutlet, Header, Footer],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {}
