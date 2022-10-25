import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'new',
        loadChildren: () => import('../new/new.module').then(m => m.NewPageModule)
      },
      {
        path: 'pay',
        loadChildren: () => import('../pay/pay.module').then(m => m.PayPageModule)
      },
      {
        path: 'post',
        loadChildren: () => import('../post/post.module').then(m => m.PostPageModule)
      },
      {
        path: 'settings',
        loadChildren: () => import('../settings/settings.module').then( m => m.SettingsPageModule)
      },
      {
        path: 'account',
        loadChildren: () => import('../account/account.module').then( m => m.AccountPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/post',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/post',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
