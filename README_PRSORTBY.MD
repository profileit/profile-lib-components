PrSortBy Example

```typescript
sort: boolean;

data = [
  { name: 'Alex', surname: 'Carrasco Salvador', age: '25', uid: 1 },
  { name: 'Ruben', surname: 'Gallardo Mancha', age: '36' },
  { name: 'Daniel', surname: 'Triguero', age: '40' }
];
```

```xml
<!-- You can now use your library component in app.component.html -->
<button (click)="sort=!sort">Sort By</button>
<div *ngFor="let person of data | prSortBy: 'age': sort">
  {{person.name}}
</div>
```

Notice you can also use the pipe as a provider to use it in your class.

Go back to [README](README.MD "README").