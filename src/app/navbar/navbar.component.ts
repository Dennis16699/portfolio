import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  constructor(private router: Router) {}

  legalNotice(event: Event): void {
    event.preventDefault(); // Verhindert das Standard-Neuladen der Seite
    this.router.navigate(['/legal-notice']); 
  }
}
