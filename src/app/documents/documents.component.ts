import { Document } from './document.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  documents: Document[] = [
    new Document('My First Doc', 'description', 'http://google.com', '19/09/2017', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Computer-Freelance-Laptop-Communication-Hand-1757224.jpg'),
    new Document('My Second Doc', 'description', 'http://google.com', '19/09/2017', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Computer-Freelance-Laptop-Communication-Hand-1757224.jpg'),
    new Document('My Last Doc', 'description', 'http://google.com', '19/09/2017', 'http://maxpixel.freegreatpicture.com/static/photo/1x/Computer-Freelance-Laptop-Communication-Hand-1757224.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
