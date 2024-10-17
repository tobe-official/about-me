import { Component } from '@angular/core';
import {BackgroundComponent} from "../global/background/background.component";
import {FooterComponent} from "../global/footer/footer.component";
import {HeaderComponent} from "../global/header/header.component";

@Component({
  selector: 'app-impressum',
  standalone: true,
    imports: [
        BackgroundComponent,
        FooterComponent,
        HeaderComponent
    ],
  templateUrl: './impressum.component.html',
  styleUrl: './impressum.component.scss'
})
export class ImpressumComponent {

}
