import { Component, HostListener } from '@angular/core';
import { BackgroundComponent } from "../global/background/background.component";
import { FooterComponent } from "../global/footer/footer.component";
import { HeaderComponent } from "../global/header/header.component";
import { Project } from "../../models/projectModel";
import { NgClass } from "@angular/common";

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [
    BackgroundComponent,
    FooterComponent,
    HeaderComponent,
    NgClass
  ],
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[] = [
    { title: 'BonApp', description: 'The social Media of the future, where you can find your perfect meal', imageUrl: 'assets/BonAppLogo.webp' },
    { title: 'About Me Site', description: 'A personal portfolio of myself, to show my skills', imageUrl: 'assets/portfolio.webp' },
    { title: 'Taper Monkey', description: 'The best and easiest way to learn the typing system and make levels for other users to enjoy it to', imageUrl: 'assets/taperMonkeyMacPicture.webp' },
    { title: 'Your Project', description: "I would be glad to work for your Project. Contact me now and let's discuss our first project", imageUrl: 'assets/project.webp' },
  ];

  currentIndex = 0;
  transitionClass = '';
  isMobile = window.innerWidth <= 768; // initialer Wert basierend auf der aktuellen Fensterbreite

  constructor() {
    this.checkMobileView(); // Initiale Überprüfung bei der Komponentenerstellung
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.checkMobileView();
  }

  private checkMobileView() {
    this.isMobile = window.innerWidth <= 768;
  }

  changeProject(next: boolean) {
    // Festlegen der Swipe-Richtung basierend auf der Auswahl
    this.transitionClass = next ? 'swipe-left' : 'swipe-right';

    setTimeout(() => {
      this.currentIndex = (this.currentIndex + (next ? 1 : -1) + this.projects.length) % this.projects.length;
      this.transitionClass = 'active';
    }); // Wartezeit für die Swipe-Animation
  }
}
