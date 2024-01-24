import { Component } from '@angular/core';
import { PortfolioComponent } from "../portfolio/portfolio.component";
import { ProjectJoinComponent } from "../project-join/project-join.component";
import { ContactFormularComponent } from "../contact-formular/contact-formular.component";
import { ProjectPokedexComponent } from "../project-pokedex/project-pokedex.component";
import { ProjectElPolloLocoComponent } from "../project-el-pollo-loco/project-el-pollo-loco.component";
import { FooterComponent } from "../footer/footer.component";
import { ProjectPortfolioComponent } from "../project-portfolio/project-portfolio.component";

@Component({
    selector: 'app-my-skills',
    standalone: true,
    templateUrl: './my-skills.component.html',
    styleUrl: './my-skills.component.scss',
    imports: [PortfolioComponent, ProjectJoinComponent, ContactFormularComponent, ProjectPokedexComponent, ProjectElPolloLocoComponent, FooterComponent, ProjectPortfolioComponent]
})
export class MySkillsComponent {

}
