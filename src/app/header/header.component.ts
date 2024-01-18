import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  showBurgerMenu = true;

  constructor(private router: Router) {}

  navigateToNavbar(): void {
    this.showBurgerMenu = false;
    this.router.navigate(['/navbar']);
  }

  
}