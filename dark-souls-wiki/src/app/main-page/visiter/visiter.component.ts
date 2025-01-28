import { Component,OnInit } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-visiter',
  imports: [ButtonModule,CommonModule],
  templateUrl: './visiter.component.html',
  styleUrl: './visiter.component.scss'
})
export class VisiterComponent implements OnInit {
  visiters: {itemImageSrc: string;  alt: string; visiterText: string}[] =[];

  ngOnInit(): void {
    this.visiters=[
      {
        itemImageSrc:'/assets/img/dark-souls-remastered_head_500x500.jpg',
        alt:'dark souls 1 image',
        visiterText:'Dark souls 1'
      },
      {
        itemImageSrc:'/assets/img/dark_souls_2_head_500x500.jpg',
        alt:'dark souls 2 image',
        visiterText:'Dark souls 2'
      },
      {
        itemImageSrc:'/assets/img/dark_souls_3_head_500x500.jpg',
        alt:'dark souls 3 image',
        visiterText:'Dark souls 3'
      }
    ]  
  }
}

