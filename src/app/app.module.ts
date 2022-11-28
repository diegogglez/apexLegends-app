import { AuthconfigInterceptor } from './services/auth-service/authconfig.interceptor';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { UpdateLegendComponent } from './pages/update-legend/update-legend.component';

@NgModule({
  declarations: [
    AppComponent,
    LegendsComponent,
    LegendsDetailComponent,
    NavbarComponent,
    LoginComponent,
    HomeComponent,
    AddLegendComponent,
    UpdateLegendComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthconfigInterceptor,
    multi: true 
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
