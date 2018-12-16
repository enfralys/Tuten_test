import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Vista } from '../vista';
import { Book, Booking } from "../book";

@Component({
  selector: 'app-vista',
  templateUrl: './vista.component.html',
  styleUrls: ['./vista.component.css']
})

export class VistaComponent implements OnInit {

  booking: Booking;
  bookings = [];
  posts: Book[];
  paginaActual: number = 1;

  constructor(private data: DataService) {
    this.data.obtenerDatos().subscribe(dato => {
console.log("Completo", dato)
this.posts = dato;

this.posts.forEach(element => {
  let json: JSON
  
console.log(this.posts['bookingId'])
});

    });

  }


  ngOnInit() {}

}
