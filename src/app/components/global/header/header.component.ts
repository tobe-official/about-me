import { Component, OnInit, HostListener } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from "@angular/material/menu";
import {Router, RouterLink} from "@angular/router";
import { environment } from '../../../environment/environment';
import {TranslateModule} from "@ngx-translate/core";
import {AppComponent} from "../../../app.component";
import {MatIconButton} from "@angular/material/button";



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    RouterLink,
    MatMenuModule,
    TranslateModule,
    MatIconButton
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  windowWidth: number = 0;

  ngOnInit(): void {
    this.windowWidth = window.innerWidth;
  }

  constructor(private router: Router, private language: AppComponent){
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.windowWidth = window.innerWidth;
  }

  protected changeLanguage(language: string): void {
    this.language.setLanguage(language);
    localStorage.setItem("language", language);
  }

  protected readonly Environment = environment;
}
