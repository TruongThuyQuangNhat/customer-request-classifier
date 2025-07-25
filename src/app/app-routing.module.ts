import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassifyRequestComponent } from './classify-request/classify-request.component';

const routes: Routes = [
  { path: '', redirectTo: 'classify', pathMatch: 'full' },
  { path: 'classify', component: ClassifyRequestComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
