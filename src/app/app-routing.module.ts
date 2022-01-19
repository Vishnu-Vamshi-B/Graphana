import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditMetricsFormComponent } from './edit-metrics-form/edit-metrics-form.component';
import { MetricsFormComponent } from './metrics-form/metrics-form.component';
import { TokenFormComponent } from './token-form/token-form.component';

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "token-form",
    component: TokenFormComponent
  },
  {
    path: "metrics-form",
    canActivate: [AuthGuard],
    component: MetricsFormComponent,
  },
  {
    path: "edit-metrics/:id",
    component: EditMetricsFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
