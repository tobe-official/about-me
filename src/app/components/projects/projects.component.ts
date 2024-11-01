import { Component, HostListener } from '@angular/core';
import { BackgroundComponent } from "../global/background/background.component";
import { FooterComponent } from "../global/footer/footer.component";
import { HeaderComponent } from "../global/header/header.component";
import { Project } from "../../models/projectModel";
import { NgClass } from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    BackgroundComponent,
    FooterComponent,
    HeaderComponent,
    NgClass,
    TranslateModule
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'BonApp',
      description: 'project.bonapp.description',
      imageUrl: 'assets/BonAppLogo.webp'
    },
    {
      title: 'About Me Site',
      description: 'project.about_me_site.description',
      imageUrl: 'assets/portfolio.webp'
    },
    {
      title: 'Taper Monkey',
      description: 'project.taper_monkey.description',
      imageUrl: 'assets/taperMonkeyMacPicture.webp'
    },
    {
      title: 'Your Project',
      description: 'project.your_project.description',
      imageUrl: 'assets/project.webp'
    }
  ];


  currentIndex = 0;
  transitionClass = '';
  isMobile = window.innerWidth <= 790; // initialer Wert basierend auf der aktuellen Fensterbreite

  constructor() {
    this.checkMobileView(); // Initiale Überprüfung bei der Komponentenerstellung
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkMobileView();
  }

  private checkMobileView() {
    this.isMobile = window.innerWidth <= 790;
  }

  changeProject(next: boolean) {
    // Festlegen der Swipe-Richtung basierend auf der Auswahl
    this.transitionClass = next ? 'swipe-left' : 'swipe-right';

    setTimeout(() => {
      this.currentIndex = (this.currentIndex + (next ? 1 : -1) + this.projects.length) % this.projects.length;
      this.transitionClass = 'active';
    });
  }
}
