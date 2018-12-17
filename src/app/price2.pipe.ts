import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price2'
})
export class Price2Pipe implements PipeTransform {

  transform(bookings:any[], priceCompare:String): any[] {

    if (!bookings) return [];
    if (!priceCompare) return bookings;
    console.log(priceCompare)
  priceCompare = priceCompare.toLowerCase()
  return  bookings.filter(booking =>  booking.bookingPrice <  priceCompare)
  
     
  }

}
