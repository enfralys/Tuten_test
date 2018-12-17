import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(bookings: any[], searchText: string): any[]{
    if (!bookings) return [];

    if (!searchText) return bookings;
searchText = searchText.toLowerCase()
  return  bookings.filter(booking => {
    return JSON.stringify(booking.bookingId).toLowerCase().indexOf(searchText.toLocaleLowerCase()) !== -1

    });
  }

}
