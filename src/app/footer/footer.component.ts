import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {

  constructor(private router: Router) {}

  legalnotice(): void {
    this.router.navigate(['/legal-notice']); // Hier '/navbar' durch den tatsächlichen Pfad zur Navbar-Seite ersetzen
  }
}
