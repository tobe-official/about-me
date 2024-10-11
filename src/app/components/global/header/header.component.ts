import { Component, OnInit, HostListener } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from "@angular/material/menu";
import {Router, RouterLink} from "@angular/router";
import { environment } from '../../../environment/environment';
import {TranslateModule} from "@ngx-translate/core";
import {AppComponent} from "../../../app.component";



@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    MatIconModule,
    RouterLink,
    MatMenuModule,
    TranslateModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  windowWidth: number = 0;

  ngOnInit(): void {
    // Initialize window width
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
  }

  protected readonly Environment = environment;
}