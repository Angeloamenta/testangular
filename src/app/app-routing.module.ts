import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './COMPONENTS/home/home.component';
import { AboutComponent } from './COMPONENTS/about/about.component';
import { ContattiComponent } from './COMPONENTS/contatti/contatti.component';

const routes: Routes = [

  { path: '', component: HomeComponent },
  {path: 'contatti', component: ContattiComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
