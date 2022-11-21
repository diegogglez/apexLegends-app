import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LegendsComponent } from './pages/legends/legends.component';
import { LegendsDetailComponent } from './pages/legends-detail/legends-detail.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { AddLegendComponent } from './pages/add-legend/add-legend.component';

@NgModule({
  declarations: [
    AppComponent,
    LegendsComponent,
    LegendsDetailComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    AddLegendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
