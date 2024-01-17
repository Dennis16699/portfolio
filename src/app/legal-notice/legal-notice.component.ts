import { Component } from '@angular/core';
import { FooterComponent } from "../footer/footer.component";

@Component({
    selector: 'app-legal-notice',
    standalone: true,
    templateUrl: './legal-notice.component.html',
    styleUrl: './legal-notice.component.scss',
    imports: [FooterComponent]
})
export class LegalNoticeComponent {

}
