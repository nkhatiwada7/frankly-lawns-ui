import {CUSTOM_ELEMENTS_SCHEMA, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationHeaderComponent } from './navigation/navigation-header/navigation-header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatCardModule} from "@angular/material/card";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";
import {ExtendedModule, FlexLayoutModule, FlexModule} from "@angular/flex-layout";
import { ServiceCardsComponent } from './components/service-cards/service-cards.component';
import { ServicingAreaComponent } from './components/servicing-area/servicing-area.component';
import { ServicesComponent } from './pages/services/services.component';
import { AboutComponent } from './pages/about/about.component';
import { FooterComponent } from './components/footer/footer.component';
import { FacebookPageComponent } from './components/facebook-page/facebook-page.component';
import {MatListModule} from "@angular/material/list";
import { TextComponent } from './components/text/text.component';
import {MatDialogModule} from "@angular/material/dialog";
import {ReactiveFormsModule} from "@angular/forms";
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import {MatInputModule} from "@angular/material/input";
import {IConfig, NgxMaskModule} from "ngx-mask";


@NgModule({
  declarations: [
    AppComponent,
    NavigationHeaderComponent,
    HomeComponent,
    ServiceCardsComponent,
    ServicingAreaComponent,
    ServicesComponent,
    AboutComponent,
    FooterComponent,
    FacebookPageComponent,
    TextComponent,
    ContactFormComponent,
    ContactPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    ExtendedModule,
    FlexLayoutModule,
    MatListModule,
    MatDialogModule,
    ReactiveFormsModule,
    MatInputModule,
    NgxMaskModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
