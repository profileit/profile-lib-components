import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProfileLibComponentsModule } from '@profiless/profile-lib-components';


import { AppComponent } from './app.component';
import { PrTabPanelViewComponent } from '../components/pr-tab-panel/pr-tab-panel-view.component';
import { PrInputViewComponent } from '../components/pr-input/pr-input-view.component';
import { PrModalViewComponent } from '../components/pr-modal/pr-modal.component';
import { PrMaskViewComponent } from '../components/pr-mask/pr-mask-view.component';
import { PrTableViewComponent } from '../components/pr-table/pr-table-view.component';
import { PrFilterViewComponent } from '../components/pr-filter/pr-filter-view.component';
import { PrSortByViewComponent } from '../components/pr-sort-by/pr-sort-by-view.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    PrTabPanelViewComponent,
    PrInputViewComponent,
    PrModalViewComponent,
    PrMaskViewComponent,
    PrTableViewComponent,
    PrFilterViewComponent,
    PrSortByViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ProfileLibComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
