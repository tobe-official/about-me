import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutMeComponent } from './components/about-me/about-me.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';

export const routes: Routes = [
    {path: "", pathMatch: "full", redirectTo: "/home"},
    {path: "home", component: HomeComponent},
    {path: "about-me", component: AboutMeComponent},
    {path: "**", component: PageNotFoundComponent}
];
