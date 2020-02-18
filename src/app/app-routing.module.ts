import { NgModule } from "@angular/core";
import { Routes, RouterModule, ExtraOptions } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { PublicComponent } from "./public/public.component";
import { NotFoundComponent } from "./shared/not-found/not-found.component";
import { LoginComponent } from "./page/login/login.component";
import { LockComponent } from "./page/lock/lock.component";
import { RegisterComponent } from "./page/register/register.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  { path: "lock", component: LockComponent },
  { path: "register", component: RegisterComponent },
  {
    path: "dashboard",
    loadChildren: "./dashboard/dashboard.module#DashboardModule"
  },
  { path: "", component: PublicComponent },
  { path: "**", component: NotFoundComponent }
];

const config: ExtraOptions = {
  scrollPositionRestoration: "enabled",
  enableTracing: true
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
