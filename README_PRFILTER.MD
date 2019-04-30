PrFilter Example

```typescript
searchText: string;
searchableList = ['name', 'surname'];

data = [
  { name: 'Alex', surname: 'Carrasco Salvador', age: '25', uid: 1 },
  { name: 'Ruben', surname: 'Gallardo Mancha', age: '36' },
  { name: 'Daniel', surname: 'Triguero', age: '40' }
];
```

```xml
<!-- You can now use your library component in app.component.html -->
<input type="text" [(ngModel)]="searchText">
<div *ngFor="let person of data | prFilter: searchText: 'name'">
  {{person.name}}
</div>
```

```xml
<!-- You can now use your library component in app.component.html -->
<input type="text" [(ngModel)]="searchText">
<div *ngFor="let person of data | prFilter: searchText: searchableList">
  {{person.name}}
</div>
```

Notice you can also use the pipe as a provider to use it in your class.

Go back to [README](README.MD "README").