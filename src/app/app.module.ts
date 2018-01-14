import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RouterModule } from '@angular/router';
import {routes} from './app.routes';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { SliderComponent } from './layout/slider/slider.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { FeaturedProductItemComponent } from './product/featured-product-item/featured-product-item.component';
import { RecomendedProductItemComponent } from './product/recomended-product-item/recomended-product-item.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SliderComponent,
    ContactUsComponent,
    FeaturedProductItemComponent,
    RecomendedProductItemComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
