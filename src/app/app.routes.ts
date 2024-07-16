import { Routes } from '@angular/router';
import { AuthGuard } from '@angular/fire/auth-guard';

export const routes: Routes = [
  {
    path: 'test',
    loadChildren: () =>
      import('./components/test/routes').then((m) => m.TEST_ROUTES)
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./components/dashboard/routes').then((m) => m.DASHBOARD_ROUTES),
    canActivate: [AuthGuard]
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/routes').then((m) => m.HOME_ROUTES)
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./components/login/routes').then((m) => m.LOGIN_ROUTES)
  },
  // {
  //   path: '**',
  //   loadChildren: () =>
  //     import('./components/test/routes').then((m) => m.TEST_ROUTES)
  // }
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  }
];
