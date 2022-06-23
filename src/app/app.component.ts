import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  photos: any = [
    {
      urlImage: 'assets/Img/digimon.jpg',
      descriptionImage: 'Foto digimon',
      title: 'Digi Escolhidos'
    },
    {
      urlImage: 'assets/Img/digimon1.jpg',
      descriptionImage: 'Foto digimon',
      title: 'Digimon'
    },
    {
      urlImage: 'assets/Img/digimon2.jpg',
      descriptionImage: 'Foto digimon',
      title: 'Digimon Adventure'
    },
  ]
}
