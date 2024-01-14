import { Component } from '@angular/core';
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { ProjectJoinComponent } from "../project-join/project-join.component";
import { ContactFormularComponent } from "../contact-formular/contact-formular.component";
import { ProjectPokedexComponent } from "../project-pokedex/project-pokedex.component";
import { ProjectElPolloLocoComponent } from "../project-el-pollo-loco/project-el-pollo-loco.component";

@Component({
    selector: 'app-my-skills',
    standalone: true,
    templateUrl: './my-skills.component.html',
    styleUrl: './my-skills.component.scss',
    imports: [PortfolioComponent, ProjectJoinComponent, ContactFormularComponent, ProjectPokedexComponent, ProjectElPolloLocoComponent]
})
export class MySkillsComponent {

}
