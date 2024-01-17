import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LegalNoticeComponent } from './legal-notice/legal-notice.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';

export const routes: Routes = [
    { path: '', component: MainPageComponent },
    { path: 'legal-notice', component: LegalNoticeComponent },
    { path: 'privacy-policy', component: PrivacyPolicyComponent },
    { path: 'navbar', component: NavbarComponent },
    
];
