import { Component,OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';

@Component({
  selector: 'app-carousel',
  imports: [GalleriaModule],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent implements OnInit {
  images: { itemImageSrc: string;  alt: string; title: string }[] = [];
  responsiveOptions: any[] = [];

  ngOnInit(): void {
    this.images = [
      {
        itemImageSrc: 'assets/img/menuForMainPage.png',
        alt: 'Dark souls trylogy',
        title: 'Three main characters of souls world'
      },
      {
        itemImageSrc: 'assets/img/ds1.jpg',
        alt: 'Dark souls 1',
        title: 'We play as a Choosen Undead'
      },
      {
        itemImageSrc: 'assets/img/ds2.jpg',
        alt: 'Dark souls 2',
        title: 'We play as a Bearer of the Curse'
      },
      {
        itemImageSrc: 'assets/img/ds3.jpg',
        alt: 'Dark souls 3',
        title: 'We play as an Ashen one '
      }
    ];

    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 5
      },
      {
        breakpoint: '768px',
        numVisible: 3
      },
      {
        breakpoint: '560px',
        numVisible: 1
      }
    ];
  }
}
