import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Vista } from '../vista';
import { Book } from "../book";
@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})

export class VistaComponent implements OnInit {

  datos = [
    {
      "bookingId": 1,
      "firstName": "Juan",
      "LastName": "Palencia",
      "bookingTime": 1022018,
      "streetAddress": "Valencia",
      "bookingPrice": 728.87
    },
    {
      "bookingId": 2,
      "firstName": "Johan",
      "LastName": "Palencia",
      "bookingTime": 1022018,
      "streetAddress": "Valencia",
      "bookingPrice": 728.87
    },
    {
      "bookingId": 3,
      "firstName": "Juana",
      "LastName": "Palencia",
      "bookingTime": 1022018,
      "streetAddress": "Valencia",
      "bookingPrice": 728.87
    },
    {
      "bookingId": 4,
      "firstName": "Manuel",
      "LastName": "Palencia",
      "bookingTime": 1022018,
      "streetAddress": "Valencia",
      "bookingPrice": 728.87
    }
  ];

  posts: Book [];
  constructor(private data : DataService) {
    this.data.obtenerDatos().subscribe(dato => {
console.log("Completo", dato)
this.posts = dato
    });

  }


  ngOnInit() {
  }

}
