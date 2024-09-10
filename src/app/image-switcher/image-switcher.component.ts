import { Component, OnInit, OnDestroy } from '@angular/core';

    @Component({
      selector: 'app-image-switcher',
      templateUrl: './image-switcher.component.html',
      styleUrls: ['./image-switcher.component.css']
    })
    export class ImageSwitcherComponent implements OnInit, OnDestroy {
      images: string[] = [
        'assets/Meme1.png',
    'assets/Meme3.png',
    'assets/Meme2.png'
      ];
      currentImageIndex: number = 0;
      intervalId: any;
    
      ngOnInit() {
        this.startImageCycle();
      }
    
      ngOnDestroy() {
        if (this.intervalId) {
          clearInterval(this.intervalId);
        }
      }
    
      startImageCycle() {
        this.intervalId = setInterval(() => {
          this.nextImage();
        }, 8000); // Change every 3 seconds
      }
    
      nextImage() {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length;
      }
    
      prevImage() {
        this.currentImageIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
      }
    }
    