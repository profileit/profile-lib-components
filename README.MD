# profile-lib-components

## Installation

To install this library, run:

```bash
$ npm install @profiless/profile-lib-components --save
```

## Consuming your library

Once you have published your library to npm, you can import your library in any Angular application by running:

```bash
$ npm install @profiless/profile-lib-components
```

and then from your Angular `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import the whole library or just the module component you want to use.
import { ProfileLibComponentsModule } from '@profiless/profile-lib-components';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify the library as an import
    ProfileLibComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Once your library is imported, you can use its components, directives and pipes in your Angular application:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<pr-fa-input id="email-field" icon="envelope">
  <input type="email" name="email" placeholder="Email" autocomplete="off" class="test-class">
</pr-fa-input>
```

## Components, directives and pipes

See the examples in the playground.

### PrInput

Click here to see a usage [example](README_PRINPUT.MD "PrInput Example").

Add icons to your inputs in order to help the user experience. You can use FontAwesome icons or Material Design Icons. Remember to import to your index.html the styles for the icons:
- \<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
- \<link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet">

#### icon: `string`

Provide the name of the Font Awesome icon or the Material Design icon.

### PrTabPanel

Click here to see a usage [example](README_PRTABPANEL.MD "PrTabPanel Example").

Tab Panel component which with Content Projection you prject the content with the PrTab. You can use the default tabs indicating in each tab (PrTab) the title or use your custom tabs via input with a Template Reference.

#### headerTemplate: `TemplateRef<any> (optional)`

Provide your custom tabs with a Template Reference.

### PrTab

#### title: `string (optional)`

Provide the title of the tab.

#### selected: `boolean (optional)`

Inicate which tab is selected.

### PrModal

Click here to see a usage [example](README_PRMODAL.MD "PrModal Example").

Modal which you can use with Content Projection or passing via input a Template Reference.

#### body: `TemplateRef<any> (optional)`

Provide a Template Reference of the body of the modal.

#### context: `any (optional)`

Provide params for the modal.

#### hideOnEsc: `boolean (optional)`

Enable hide modal when Esc key is pressed.

#### hideOnClickOutside: `boolean (optional)`

Enable hide modal when the user clicks outside the modal's content.

### PrModalOpenOnClick

Structural directive.

#### prModalOpenOnClick: `ElementRef | Array<ElementRef>`

Adds a click event to the element references that are passed.

### PrMask

Click here to see a usage [example](README_PRMASK.MD "PrMask Example").

Directive in order to mask an input for example for a telefone number.

### PrSortBy

Click here to see a usage [example](README_PRSORTBY.MD "PrSortBy Example").

Sort and array by a key.

#### array: `Array<object>`

Provide the array to sort.

#### value: `string`

Provide the key of the array which you want to be sorted.

#### descending: `boolean (optional)`

Switch order of the array.

### PrFilter

Click here to see a usage [example](README_PRFILTER.MD "PrFilter Example").

Filters an array.

#### array: `Array<object>`

Provide the array to filter.

#### input: `string`

Provide the stream to filter.

#### searchableList: `string | Array<string> (optional)`

Provide a key or an array of keys to filter.

#### avoidKeys: `string | Array<string> (optional)`

Provide a key or an array of keys to avoid filter for that key. The searchableList must be null.

### PrTable

Click here to see a usage [example](README_PRTABLE.MD "PrTable Example").

Creates a table.

#### data: `Array<object>`

The data of the table.

#### showSelect: `boolean (optional)`

The default value is true. Shows a select input for each item of the table.

#### footerButtons: `Array<Button> (optional)`

Provide buttons with the interface of an `id` and `text`.

#### title: `string (optional)`

Title of the table.

#### itemsPerPage: `number (optional, dynamic)`

Sets the table to be a paginable table. It's set dynamically.

#### footerPageText: `string (optional)`

The default value is `page `.

#### avoidKeyFilter: `string | Array<string> (optional)`

Key or keys to avoid filtering.

#### search: `string (optional)`

Filters by the string passed.

#### noResultsText: `string`

The default value is `No results`

#### linkClicked: `EventEmitter<any> (optional)`

Emits the clicked item.

#### btnClicked: `EventEmitter<any> (optional)`

Emits an object with the id of the button clicked and an array of the selected items.

### PrCol

Columns of the table component.

#### id: `string`

The id must be the name of the key of the items which belongs to this column.

#### header: `string (optional)`

The header text of the column.

#### isLink: `boolean (optional)`

Sets a link which fires the linkClicked EventEmitter.

#### sorteable: `boolean`

Sets the column to be sorteable.

#### showHeaders: `boolean`

The default value is true.

#### allRows: `boolean`

Set all checkboxes.

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

To lint all `*.ts` files:

```bash
$ npm run lint
```

To see in action the components run the playground:

```bash
$ npm run playground
```

## License

MIT © [Alex Carrasco Salvador](mailto:acarrasco@profile.es)
