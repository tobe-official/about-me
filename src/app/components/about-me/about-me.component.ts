import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from "../global/header/header.component";
import { FooterComponent } from "../global/footer/footer.component";
import { BackgroundComponent } from '../global/background/background.component';
import {NgOptimizedImage} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";



@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    BackgroundComponent,
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    NgOptimizedImage,
    TranslateModule
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {

}
