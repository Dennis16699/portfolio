import { Component, ElementRef, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-project-pokedex',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project-pokedex.component.html',
  styleUrl: './project-pokedex.component.scss'
})
export class ProjectPokedexComponent {

  state = 'normal';
  isVisible = false;

  @ViewChild('aboutmeLeft', { static: true }) aboutmeLeft: ElementRef | undefined;

  hoveredStates: boolean[] = [];

  showDescription(index: number) {
    this.hoveredStates[index] = true;
  }

  hideDescription(index: number) {
    this.hoveredStates[index] = false;
  }

  isDescriptionVisible(index: number): boolean {
    return this.hoveredStates[index] || false;
  }

  ngAfterViewInit() {
    this.observeVisibility();
  }

  observeVisibility() {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    };

    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          this.isVisible = true; 
          if (this.state !== 'unnormal') {
            this.state = 'unnormal';
          }
        } else {
          if (!this.isVisible) {
            this.state = 'normal'; 
          }
        }
      });
    }, options);

    if (this.aboutmeLeft) {
      observer.observe(this.aboutmeLeft.nativeElement);
    }
  }
}

