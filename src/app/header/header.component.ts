import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {


  constructor(private router: Router) {}

  navigateToNavbar(): void {
    this.router.navigate(['/navbar']); // Hier '/navbar' durch den tatsächlichen Pfad zur Navbar-Seite ersetzen
  }

}