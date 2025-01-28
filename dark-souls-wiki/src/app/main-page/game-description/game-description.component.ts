import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game-description',
  imports: [CommonModule],
  templateUrl: './game-description.component.html',
  styleUrl: './game-description.component.scss'
})
export class GameDescriptionComponent implements OnInit {
  descriptions: { itemImageSrc: string; alt: string; subtitle: string; text: string }[] = [];

  ngOnInit(): void {
    this.descriptions = [
      {
        itemImageSrc: '/assets/gif/ds1.gif',
        alt: 'ds 1 gif',
        subtitle: 'Dark souls I',
        text: "Dark Souls is a 2011 action role-playing game developed by FromSoftware and published by Namco Bandai Games. A spiritual successor to FromSoftware's Demon's Souls, the game is the first in the Dark Souls series. The game takes place in the kingdom of Lordran, where players assume the role of a cursed undead character who begins a pilgrimage to discover the fate of their kind. A port for Windows featuring additional content, known as the Prepare to Die Edition, was released in August 2012. It was also released for consoles under the subtitle Artorias of the Abyss in October 2012."
      },
      {
        itemImageSrc: '/assets/gif/ds2.gif',
        alt: 'ds 2 gif',
        subtitle: 'Dark souls II',
        text: "Dark Souls II is a 2014 action role-playing game developed by FromSoftware. The second installment of the Dark Souls series, it was released for Windows, PlayStation 3 and Xbox 360 by FromSoftware in Japan and Bandai Namco Games internationally"
      },
      {
        itemImageSrc: '/assets/gif/DarkSouls3.gif',
        alt: 'ds 3 gif',
        subtitle: 'Dark souls III',
        text: "DARK SOULS™ III continues to push the boundaries with the latest, ambitious chapter in the critically-acclaimed and genre-defining series. As fires fade and the world falls into ruin, journey into a universe filled with more colossal enemies and environments."
      }
    ]
  }
}
