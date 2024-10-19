import {Component} from '@angular/core';
import {BackgroundComponent} from "../global/background/background.component";
import {FooterComponent} from "../global/footer/footer.component";
import {HeaderComponent} from "../global/header/header.component";
import {TranslateModule} from "@ngx-translate/core";
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import emailjs, {EmailJSResponseStatus} from 'emailjs-com';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatButton} from "@angular/material/button";


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    BackgroundComponent,
    FooterComponent,
    HeaderComponent,
    TranslateModule,
    FormsModule,
    MatFormField,
    ReactiveFormsModule,
    MatInput,
    MatLabel,
    MatButton
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  nameOfCustomer = new FormControl("", [Validators.required]);
  emailOfCustomer = new FormControl("", [
    Validators.required,
    Validators.email,
    Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
  ]);
  textOfCustomer = new FormControl("", [Validators.required]);

  public sendEmail(e: Event) {
    if (this.nameOfCustomer.valid && this.emailOfCustomer.valid && this.textOfCustomer.valid && this.nameOfCustomer.value != "" && this.emailOfCustomer.value != "" && this.emailOfCustomer.value != "") {
      e.preventDefault(); // Verhindert die Standard-Formularaktion
      emailjs.sendForm('service_nt705ry', 'template_kp1qstl', e.target as HTMLFormElement, 'z_tcBe0UR1PXaeCD1')
        .then((result: EmailJSResponseStatus) => {
          console.log('Email sent successfully:', result.text);
          alert('Email sent successfully');
        }, (error) => {
          console.error('Error sending email:', error.text);
          alert('Failed to send email');
        });
    } else {
      alert("Please fill all the inputs correctly")
    }
  }
}
