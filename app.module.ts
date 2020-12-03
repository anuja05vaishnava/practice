import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './privacy/privacy.component';
import { CreateComponent } from './terms/terms.component';
import { HomeComponent } from './home/home.component';
import { FormGroup, FormControl,Validators } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ListComponent,
    CreateComponent,
    HomeComponent

    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
