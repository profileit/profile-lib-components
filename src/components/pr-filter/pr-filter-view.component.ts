import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pr-filter-view',
  template: `
<input type="text" [(ngModel)]="searchText">
<div *ngFor="let person of data | prFilter: searchText: 'name'">
  {{person.name}}
</div>
  `,
  styles: [``]
})
export class PrFilterViewComponent {

  searchText: string;
  searchableList = ['name', 'surname'];

  data = [
    { name: 'Alex', surname: 'Carrasco Salvador', age: '25', uid: 1 },
    { name: 'Ruben', surname: 'Gallardo Mancha', age: '36' },
    { name: 'Daniel', surname: 'Triguero', age: '40' }
  ];

}
