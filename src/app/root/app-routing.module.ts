import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyModule } from '../core/page-structure/body/body.module';

const routes: Routes = [];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BodyModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
