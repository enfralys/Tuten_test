import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(bookings: any[], searchText: string): any {
    if (!bookings) return [];

    if (!searchText) return bookings;

    return bookings.filter(booking => booking.bookingId == searchText);
  }

}
