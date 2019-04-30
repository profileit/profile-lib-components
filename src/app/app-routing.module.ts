import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrTabPanelViewComponent } from './../components/pr-tab-panel/pr-tab-panel-view.component';
import { PrInputViewComponent } from './../components/pr-input/pr-input-view.component';
import { PrModalViewComponent } from './../components/pr-modal/pr-modal.component';
import { PrMaskViewComponent } from './../components/pr-mask/pr-mask-view.component';
import { PrTableViewComponent } from './../components/pr-table/pr-table-view.component';
import { PrFilterViewComponent } from './../components/pr-filter/pr-filter-view.component';
import { PrSortByViewComponent } from './../components/pr-sort-by/pr-sort-by-view.component';

const routes: Routes = [
  {
    path: 'pr-tab-panel',
    component: PrTabPanelViewComponent
  },
  {
    path: 'pr-input',
    component: PrInputViewComponent
  },
  {
    path: 'pr-modal',
    component: PrModalViewComponent
  },
  {
    path: 'pr-mask',
    component: PrMaskViewComponent
  },
  {
    path: 'pr-table',
    component: PrTableViewComponent
  },
  {
    path: 'pr-filter',
    component: PrFilterViewComponent
  },
  {
    path: 'pr-sortby',
    component: PrSortByViewComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
