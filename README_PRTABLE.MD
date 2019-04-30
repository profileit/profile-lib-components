PrTable Example

```typescript
searchText: string;

numberPerPage = 5;

setAll: boolean;

data = people; // external array with a lot of people

data1 = [
  { name: 'Alex', surname: 'Carrasco Salvador', age: '25', uid: 1 },
  { name: 'Ruben', surname: 'Gallardo Mancha', age: '36' },
  { name: 'Daniel', surname: 'Triguero', age: '40' }
];

data2 = [
  { name: 'Alex', surname: 'Carrasco Salvador', age: '25' },
  { name: 'Ruben', surname: 'Gallardo Mancha', age: '36' },
  { name: 'Daniel', surname: 'Triguero', age: '40' }
];

data3 = [
  { name: 'Alex', surname: 'Carrasco Salvador', age: '25' },
  { name: 'Ruben', surname: 'Gallardo Mancha', age: '36' },
  { name: 'Daniel', surname: 'Triguero', age: '40' }
];

data4 = [
  { name: 'Alex', surname: 'Carrasco Salvador', age: '25' },
  { name: 'Ruben', surname: 'Gallardo Mancha', age: '36' },
  { name: 'Daniel', surname: 'Triguero', age: '40' }
];

btnList = [
  { id: 'proceed', text: 'Aceptar' },
  { id: 'cancel', text: 'Cancelar' }
];

handleTableLink(event: any) {
  console.log(event);
}

handleTableBtn(event: any) {
  console.log(event);
}

set5() {
  this.numberPerPage = 5;
}

set10() {
  this.numberPerPage = 10;
}
```

```xml
<!-- You can now use your library component in app.component.html -->
<div style="margin:0 auto; width:50%">
  Search in first table
  <pr-md-input icon="search">
    <input type="text" [(ngModel)]="searchText">
  </pr-md-input>
  <button (click)="set5()">set show 5</button>
  <button (click)="set10()">set show 10</button>
  <button (click)="setAll=!setAll">set all rows</button> <br><br>
  <pr-table class="table-structure default-theme border-lines"
            [data]="data"
            title="People"
            [footerButtons]="btnList"
            [itemsPerPage]="numberPerPage"
            footerPageText="página "
            [allRows]="setAll"
            [search]="searchText"
            avoidKeyFilter="uid"
            (btnClicked)="handleTableBtn($event)"
            (linkClicked)="handleTableLink($event)">
    <pr-col id="name" header="Name" [isLink]="true"></pr-col>
    <pr-col id="surname" header="Surname" [sorteable]="true"></pr-col>
    <pr-col id="age" header="Age" [sorteable]="true"></pr-col>
  </pr-table>

  <pr-table class="table-structure default-theme"
    [data]="data1"
    title="People"
    [footerButtons]="btnList"
    (btnClicked)="handleTableBtn($event)"
    (linkClicked)="handleTableLink($event)">
    <pr-col id="name" header="Name" [isLink]="true"></pr-col>
    <pr-col id="surname" header="Surname" [sorteable]="true"></pr-col>
    <pr-col id="age" header="Age" [sorteable]="true"></pr-col>
  </pr-table>

  <pr-table class="table-structure border-lines"
    [data]="data2"
    title="People"
    [footerButtons]="btnList"
    (btnClicked)="handleTableBtn($event)"
    (linkClicked)="handleTableLink($event)">
    <pr-col id="name" header="Name" [isLink]="true"></pr-col>
    <pr-col id="surname" header="Surname"></pr-col>
    <pr-col id="age" header="Age"></pr-col>
  </pr-table>

  <pr-table class="table-structure"
    [data]="data3"
    title="People"
    [footerButtons]="btnList"
    (btnClicked)="handleTableBtn($event)"
    (linkClicked)="handleTableLink($event)">
    <pr-col id="name" header="Name" [isLink]="true"></pr-col>
    <pr-col id="surname" header="Surname"></pr-col>
    <pr-col id="age" header="Age"></pr-col>
  </pr-table>

  <pr-table
    [data]="data4"
    title="People"
    [footerButtons]="btnList"
    (btnClicked)="handleTableBtn($event)"
    (linkClicked)="handleTableLink($event)">
    <pr-col id="name" header="Name" [isLink]="true"></pr-col>
    <pr-col id="surname" header="Surname"></pr-col>
    <pr-col id="age" header="Age"></pr-col>
  </pr-table>
</div>
```

Go back to [README](README.MD "README").