import { Component } from '@angular/core';
import {BackgroundComponent} from "../global/background/background.component";
import {FooterComponent} from "../global/footer/footer.component";
import {HeaderComponent} from "../global/header/header.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-contact',
  standalone: true,
    imports: [
        BackgroundComponent,
        FooterComponent,
        HeaderComponent,
        TranslateModule
    ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

}
