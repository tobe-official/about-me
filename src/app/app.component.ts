import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BackgroundComponent } from "./components/global/background/background.component";
import { TranslateService } from '@ngx-translate/core';
import { environment } from './environment/environment';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BackgroundComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'about-me';
  constructor(private translateService: TranslateService) {}
  ngOnInit(): void {
    this.translateService.addLangs(environment.langauges);
    this.setLanguage('de')
  }
  setLanguage(lang: string): void {
    this.translateService.use(lang);
  }
}
