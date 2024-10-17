import { Component } from '@angular/core';
import {BackgroundComponent} from "../global/background/background.component";
import {FooterComponent} from "../global/footer/footer.component";
import {HeaderComponent} from "../global/header/header.component";

@Component({
  selector: 'app-skills',
  standalone: true,
    imports: [
        BackgroundComponent,
        FooterComponent,
        HeaderComponent
    ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {

}
