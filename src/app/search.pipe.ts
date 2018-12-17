import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(bookings: any[], searchText: string): any {
    if (!bookings) return [];

    if (!searchText) return bookings;

    // function name(query) {
    //   return bookings.filter(function(el) {
    //     return el.bookingId.indexOf(query) > -1;
    //   })
    // }

    // return name(searchText)

    // return bookings.filter(booking => booking.bookingId == searchText);
    return bookings.map(booking => booking.bookingId).indexOf(searchText);
  }

}
