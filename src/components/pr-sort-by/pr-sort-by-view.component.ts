import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-sort-by-view',
  template: `
<button (click)="sort=!sort">Sort By</button>
<div *ngFor="let person of data | prSortBy: 'age': sort">
  {{person.name}}
</div>
  `,
  styles: [``]
})
export class PrSortByViewComponent {

  sort: boolean;

  data = [
    { name: 'Alex', surname: 'Carrasco Salvador', age: '25', uid: 1 },
    { name: 'Ruben', surname: 'Gallardo Mancha', age: '36' },
    { name: 'Daniel', surname: 'Triguero', age: '40' }
  ];

}
