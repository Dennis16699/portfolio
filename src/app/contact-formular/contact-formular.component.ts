import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-formular',
  standalone: true,
  imports: [],
  templateUrl: './contact-formular.component.html',
  styleUrl: './contact-formular.component.scss'
})

export class ContactFormularComponent {

  constructor(private router: Router) {}

  privacypolicy(): void {
    this.router.navigate(['/privacy-policy']); 
  }
}
