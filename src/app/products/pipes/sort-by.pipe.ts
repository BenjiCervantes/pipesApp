import { Pipe, PipeTransform } from '@angular/core';
import { Hero } from '../interfaces/hero.interface';

@Pipe({
  name: 'sortBy'
})

export class SortByPipe implements PipeTransform {
  transform( heroes: Hero[], sortBy?: keyof Hero | '', asc: boolean = true ): Hero[] {
    const sortPositive: number = asc ? 1 : -1;
    const sortNegative: number = asc ? -1 : 1;
    switch( sortBy ){
      case 'name':
        return heroes.sort( (a,b) => (a.name > b.name ) ? sortPositive : sortNegative );
      case 'canFly':
        return heroes.sort( (a,b) => (a.canFly > b.canFly ) ? sortPositive: sortNegative );
      case 'color':
        return heroes.sort( (a,b) => (a.color > b.color ) ? sortPositive: sortNegative );
      default:
        return heroes;

    }

  }
}
