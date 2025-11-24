import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { sessionGuard } from '@core/guards/session.guard';

const routes: Routes = [
  {
      path: 'auth', // http://localhost:4200/auth
      loadChildren: () =>
        import('./modules/auth/auth.module').then((m) => m.AuthModule),
    },
  {
    path: '', // http://localhost:4200/
    component: HomePageComponent,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
    canActivate:[sessionGuard]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
