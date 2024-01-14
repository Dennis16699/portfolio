import { Component } from '@angular/core';
import { MySkillsComponent } from "../my-skills/my-skills.component";

@Component({
    selector: 'app-about-me',
    standalone: true,
    templateUrl: './about-me.component.html',
    styleUrl: './about-me.component.scss',
    imports: [MySkillsComponent]
})
export class AboutMeComponent {

}
