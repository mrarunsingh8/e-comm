import { Routes } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {PageNotFoundComponent} from './pages/page-not-found/page-not-found.component';

export const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'contact-us', component: ContactUsComponent},
  {path: '**', component: PageNotFoundComponent}
]
