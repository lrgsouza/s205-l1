import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab3Page } from './tab3.page';

const routes: Routes = [
  {
    path: '',
    component: Tab3Page,
    children: [
      {
        path: 'tab1',
        loadChildren: () => import('../tab1/tab1.module').then( m => m.Tab1PageModule)
      },
      {
        path: 'tab2',
        loadChildren: () => import('../tab2/tab2.module').then( m => m.Tab2PageModule)
      },
      {
        path: 'tab3',
        loadChildren: () => import('../tab3/tab3.module').then( m => m.Tab3PageModule)
      },
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then( m => m.Tab4PageModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Tab3PageRoutingModule {}
