import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './core/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', redirectTo: '/cooperative', pathMatch: 'full'  },
      {
        path: 'cooperative',
        loadChildren: () => import('./modules/cooperative/cooperative.module').then(m => m.CooperativeModule)
      },
    ],
  },

  // Not found
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
