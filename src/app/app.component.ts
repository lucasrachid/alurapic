import {Component, OnInit} from '@angular/core';
import {Photos} from "./models/photos";
import {PhotoService} from "./services/photo.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  photos: Photos[] = [];

  constructor( private photoService: PhotoService ) { }

  ngOnInit(): void {
    this.photoService
      .listFromUser('flavio')
      .subscribe(response => this.photos = response);
  }
}
