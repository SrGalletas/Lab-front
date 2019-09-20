// reports.module.ts
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// containers
import { CatalogComponent } from '../catalog/catalog.component';

// routes
export const ROUTES: Routes = [
    { path: '', component: CatalogComponent, pathMatch: "full" }
];

@NgModule({
    imports: [RouterModule.forChild(ROUTES)],
    declarations: [CatalogComponent]
})
export class CatalogModule { }