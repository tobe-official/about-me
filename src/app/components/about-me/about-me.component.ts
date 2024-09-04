import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { FooterComponent } from "../footer/footer.component";
import { BackgroundComponent } from '../background/background.component';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    BackgroundComponent,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    FooterComponent
],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
