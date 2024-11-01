import {Component} from '@angular/core';
import {BackgroundComponent} from "../global/background/background.component";
import {FooterComponent} from "../global/footer/footer.component";
import {HeaderComponent} from "../global/header/header.component";
import {skillsModel} from "../../models/skillsModel";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    BackgroundComponent,
    FooterComponent,
    HeaderComponent,
    TranslateModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  protected skillsList: skillsModel[] = [
    {skill: "Java", linkToSite: "https://www.java.com"},
    {
      skill: "JavaScript",
      linkToSite: "https://de.wikipedia.org/wiki/JavaScript#:~:text=JavaScript%20(kurz%20JS)%20ist%20eine,M%C3%B6glichkeiten%20von%20HTML%20zu%20erweitern"
    },
    {skill: "TypeScript", linkToSite: "https://www.typescriptlang.org/"}, {
      skill: "HTML",
      linkToSite: "https://de.wikipedia.org/wiki/Hypertext_Markup_Language"
    }, {
      skill: "CSS",
      linkToSite: "https://de.wikipedia.org/wiki/Cascading_Style_Sheets"
    }, {skill: "SQL", linkToSite: "https://de.wikipedia.org/wiki/SQL"}, {
      skill: "Database Management",
      linkToSite: "https://en.wikipedia.org/wiki/Database"
    }, {skill: "C#", linkToSite: "https://learn.microsoft.com/de-de/dotnet/csharp/tour-of-csharp/"}, {
      skill: "Angular",
      linkToSite: "https://angular.dev/"
    }, {
      skill: "Dart",
      linkToSite: "https://dart.dev/"
    }, {skill: "Flutter", linkToSite: "https://flutter.dev/"}, {
      skill: "Spring (Boot)",
      linkToSite: "https://spring.io/projects/spring-boot"
    }
  ]
}
