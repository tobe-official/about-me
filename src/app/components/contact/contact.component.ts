import { Component } from '@angular/core';
import {BackgroundComponent} from "../global/background/background.component";
import {FooterComponent} from "../global/footer/footer.component";
import {HeaderComponent} from "../global/header/header.component";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";
import emailjs, { EmailJSResponseStatus } from 'emailjs-com';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    BackgroundComponent,
    FooterComponent,
    HeaderComponent,
    TranslateModule,
    FormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  public sendEmail(e: Event) {
    e.preventDefault(); // Verhindert die Standard-Formularaktion
    emailjs.sendForm('service_nt705ry', 'template_kp1qstl', e.target as HTMLFormElement, 'z_tcBe0UR1PXaeCD1')
      .then((result: EmailJSResponseStatus) => {
        console.log('Email sent successfully:', result.text);
        alert('Email sent successfully');
      }, (error) => {
        console.error('Error sending email:', error.text);
        alert('Failed to send email');
      });
  }
}
