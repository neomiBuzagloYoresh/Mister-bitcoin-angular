import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { StatisticPageComponent } from './pages/statistic-page/statistic-page.component';
import { EditPageComponent } from './pages/edit-page/edit-page.component';
import { ContactResolverService } from './services/contact-resolver.service';
import { LoginComponent } from './pages/login/login.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    resolve: { contact: ContactResolverService },
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    children: [
      {
        path: 'edit/:id',
        component: EditPageComponent,
        resolve: { contact: ContactResolverService },
      },
      {
        path: 'edit',
        component: EditPageComponent,
        resolve: { contact: ContactResolverService },
      },
      {
        path: 'contact/:id',
        component: ContactDetailsPageComponent,
        resolve: { contact: ContactResolverService },
      },
    ],
  },
  {
    path: 'contact/:id',
    component: ContactDetailsPageComponent,
    resolve: { contact: ContactResolverService },
    canActivate: [AuthGuard],
  },
  // resolve: { contact: contactResolverService }

  {
    path: 'statistic',
    component: StatisticPageComponent,
    // resolve: { contact: contactResolverService }
  },
  {
    path: '',

    component: HomePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
