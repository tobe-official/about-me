import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { HeaderComponent } from "../global/header/header.component";
import { BackgroundComponent } from '../global/background/background.component';


@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    BackgroundComponent,
    RouterOutlet,
    RouterLink,
    HeaderComponent
],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
