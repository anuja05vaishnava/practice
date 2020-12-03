import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { HomeComponent } from './home/home.component'






const appRoutes: Routes = [
  const routes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'create', component: CreateComponent },
    { path: ' list', component: ListComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    path: '**', component: PageNotFoundComponent
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
