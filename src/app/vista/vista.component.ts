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
      console.log(dato.length)
      // this.posts = dato

      for(let data of dato){

        this.booking              = new Booking();
        this.booking.bookingId    = data["bookingId"];
        this.booking.bookingTime  = data["bookingTime"];
        this.booking.bookingPrice = data["bookingPrice"];

        let bookingFields = JSON.parse(data["bookingFields"]);

        this.booking.firstName     = bookingFields["firstName"];
        this.booking.lastName      = bookingFields["lastName"];
        this.booking.streetAddress = bookingFields["location"]["streetAddress"];

        this.bookings.push(this.booking);
      }
    });

  }

  showSearchResults(event: any): void {
    console.log(event.target.value);
  }


  ngOnInit() {}

}
