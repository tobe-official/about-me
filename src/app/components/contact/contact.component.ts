import {Component, OnInit} from '@angular/core';
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
export class ContactComponent implements OnInit {
  nameOfCustomer = new FormControl("", [Validators.required]);
  emailOfCustomer = new FormControl("", [
    Validators.required,
    Validators.email,
    Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
  ]);
  textOfCustomer = new FormControl("", [Validators.required]);
  private amountOfEmailsSent: number = 0;
  private emailSendingAllowed: boolean = true;

  ngOnInit(): void {
    if (localStorage.getItem("emailsSent") === null) {
      localStorage.setItem("emailsSent", "0");
    } else {
      try {
        this.amountOfEmailsSent = +localStorage.getItem("emailsSent")!;
      } catch (error) {
        this.emailSendingAllowed = false;
        alert("An error occurred using the email feature. You will not be able to use this feature. Please clear your LocalStorage or use another device.");
      }
    }
  }

  public sendEmail(e: Event) {
    try {
      this.amountOfEmailsSent = +localStorage.getItem("emailsSent")!;
      console.log(`Here is the number: ${this.amountOfEmailsSent}`)
    } catch (error) {
      this.emailSendingAllowed = false;
      alert("An error occurred using the email feature. You will not be able to use this feature. Please clear your LocalStorage or use another device.");
    }

    if (!this.emailSendingAllowed || +this.amountOfEmailsSent >= 3) {
      alert("You have sent too many messages or you are not allowed to send messages. Please try again later");
    } else {
      if (this.nameOfCustomer.valid && this.emailOfCustomer.valid && this.textOfCustomer.valid) {
        e.preventDefault();

        const templateParams = {
          nameOfCustomer: this.nameOfCustomer.value,
          emailOfCustomer: this.emailOfCustomer.value,
          textOfCustomer: this.textOfCustomer.value,
        };

        emailjs.send('service_nt705ry', 'template_kp1qstl', templateParams, 'z_tcBe0UR1PXaeCD1')
          .then((result: EmailJSResponseStatus) => {
            localStorage.setItem("emailsSent", String(this.amountOfEmailsSent + 1));
            this.nameOfCustomer.reset();
            this.emailOfCustomer.reset();
            this.textOfCustomer.reset();
            alert('Email sent successfully');
          }, (error) => {
            alert('Failed to send email');
          });
      } else {
        alert("Please fill all the inputs correctly");
      }
    }
  }
}
