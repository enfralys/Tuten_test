import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'price',
  
})
export class PricePipe implements PipeTransform {

  
  transform(bookings: any[], priceText: String ): any[]{
    if (!bookings) return [];
    if (!priceText) return bookings;
    console.log(priceText)

  return  bookings.filter(booking =>  booking.bookingPrice >=  priceText)
}



}