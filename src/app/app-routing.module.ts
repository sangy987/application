import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Tab1ComponentComponent } from './components/tab1-component/tab1-component.component';
import { Tab2ComponentComponent } from './components/tab2-component/tab2-component.component';
import { Tab3ComponentComponent } from './components/tab3-component/tab3-component.component';
import { Tab4ComponentComponent } from './components/tab4-component/tab4-component.component';

const routes: Routes = [
  { path: '/#tab1', component: Tab1ComponentComponent },
  { path: '/#tab2', component: Tab2ComponentComponent },
  { path: '/#tab3', component: Tab3ComponentComponent },
  { path: '/#tab4', component: Tab4ComponentComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
