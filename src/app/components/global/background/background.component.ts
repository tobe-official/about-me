import { Component, ElementRef, OnInit, OnDestroy } from '@angular/core';
import { Renderer2 } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import {NgOptimizedImage} from "@angular/common";

@Component({
  selector: 'app-background',
  standalone: true,
  imports: [
    RouterLink,
    HeaderComponent,
    FooterComponent,
    NgOptimizedImage
  ],
  templateUrl: './background.component.html',
  styleUrl: './background.component.scss'
})
export class BackgroundComponent {
  protected howManyCircles: number[] = [];
  private animationFrameId!: number;
  private angle = 0;
  private radiusX = 600; // Horizontaler Radius des Ovals
  private radiusY = 700; // Vertikaler Radius des Ovals
  private numDivs = 15; // Anzahl der Kreise
  private rotationAngle = 3  * Math.PI / 4; // 45 Grad in Bogenmaß

  constructor(private renderer: Renderer2, private elRef: ElementRef) {}

  ngOnInit(): void {
    this.howManyCircles.length = this.numDivs;
    this.startAnimationLoop();
  }

  startAnimationLoop(): void {
    const speed = 0.002;

    if(window.innerWidth <= 450 && window.innerWidth >= 200){
      this.radiusX = 150;
      this.radiusY = 250;
    } else if(window.innerWidth <= 1050 && window.innerWidth >= 451){
      this.radiusX = 450;
      this.radiusY = 550;
    }


    const animate = () => {
      this.angle += speed;

      const divs = this.elRef.nativeElement.querySelectorAll('.circle-div');

      divs.forEach((div: HTMLElement, index: number) => {
        const angleOffset = (2 * Math.PI / this.numDivs) * index;
        const x = this.radiusX * Math.cos(this.angle + angleOffset) * Math.cos(this.rotationAngle) -
                  this.radiusY * Math.sin(this.angle + angleOffset) * Math.sin(this.rotationAngle) + window.innerWidth / 2;
        const y = this.radiusX * Math.cos(this.angle + angleOffset) * Math.sin(this.rotationAngle) +
                  this.radiusY * Math.sin(this.angle + angleOffset) * Math.cos(this.rotationAngle) + window.innerHeight / 2;

        this.renderer.setStyle(div, 'left', `${x}px`);
        this.renderer.setStyle(div, 'top', `${y}px`);
        this.renderer.setStyle(div, 'transform', 'translate(-50%, -50%)'); // Zentrieren
      });

      this.animationFrameId = requestAnimationFrame(animate);
    };

    animate();
  }

  ngOnDestroy(): void {
    cancelAnimationFrame(this.animationFrameId);
  }

  protected readonly window = window;
}
