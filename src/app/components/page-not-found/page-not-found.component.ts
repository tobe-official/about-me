import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { HeaderComponent } from "../header/header.component";


@Component({
  selector: 'app-page-not-found',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HeaderComponent
],
  templateUrl: './page-not-found.component.html',
  styleUrl: './page-not-found.component.scss'
})
export class PageNotFoundComponent {

}
