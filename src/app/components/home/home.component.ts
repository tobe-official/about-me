import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import { HeaderComponent } from "../global/header/header.component";
import { FooterComponent } from "../global/footer/footer.component";
import { BackgroundComponent } from "../global/background/background.component";
import {TranslateModule} from "@ngx-translate/core";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    BackgroundComponent,
    TranslateModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
