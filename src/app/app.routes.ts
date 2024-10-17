import {Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {AboutMeComponent} from './components/about-me/about-me.component';
import {PageNotFoundComponent} from './components/page-not-found/page-not-found.component';
import {ContactComponent} from "./components/contact/contact.component";
import {ProjectsComponent} from "./components/projects/projects.component";
import {SkillsComponent} from "./components/skills/skills.component";
import {ImpressumComponent} from "./components/impressum/impressum.component";

export const routes: Routes = [
  {path: "", pathMatch: "full", redirectTo: "/home"},
  {path: "home", component: HomeComponent},
  {path: "about-me", component: AboutMeComponent},
  {path: "contact", component: ContactComponent},
  {path: "projects", component: ProjectsComponent},
  {path: "skills", component: SkillsComponent},
  {path: "impressum", component: ImpressumComponent},
  {path: "**", component: PageNotFoundComponent}
];
