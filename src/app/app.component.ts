import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./header/header.component";
import { MainPageComponent } from "./main-page/main-page.component";
import { AboutMeComponent } from "./about-me/about-me.component";


@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, HeaderComponent, MainPageComponent, AboutMeComponent]
})
export class AppComponent {
  title = 'my-portfolio';
}
