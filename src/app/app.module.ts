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
import { TextComponent } from './component/text/text.component';

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
    ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
