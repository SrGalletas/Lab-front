import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { LandingComponent } from './components/landing/landing.component';
import { MissComponent } from './components/miss/miss.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  { path: "home", component: LandingComponent },
  { path: "catalog", loadChildren: '../catalog/catalog.module#CatalogModule' },
  { path: "404", component: MissComponent },
  { path: "admin", component: AdminComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
