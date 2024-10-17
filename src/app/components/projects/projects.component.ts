import { Component } from '@angular/core';
import {BackgroundComponent} from "../global/background/background.component";
import {FooterComponent} from "../global/footer/footer.component";
import {HeaderComponent} from "../global/header/header.component";

@Component({
  selector: 'app-projects',
  standalone: true,
    imports: [
        BackgroundComponent,
        FooterComponent,
        HeaderComponent
    ],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.scss'
})
export class ProjectsComponent {

}
