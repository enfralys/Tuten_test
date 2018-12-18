import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'price',

})
export class PricePipe implements PipeTransform {


  transform(bookings: any[], priceText: String): any[] {
    if (!bookings) return [];
    if (!priceText) return bookings;

    return bookings.filter(booking => booking.bookingPrice >= priceText)
  }


  Transform(bookings: any[], priceCompare: String): any[] {
    if (!bookings) return [];
    if (!priceCompare) return bookings;

    priceCompare = priceCompare.toLowerCase()
    return bookings.filter(booking => booking.bookingPrice <= priceCompare)


  }
}
