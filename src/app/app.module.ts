import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { RouterModule, Route } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { VistaComponent } from './vista/vista.component';
import { DataService } from './data.service';

const routes: Route[]=[
{path:'dataview' , component: LoginComponent},
{path: '', component: VistaComponent}

]


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VistaComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
