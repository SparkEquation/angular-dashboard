import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NgxsModule, StateContext } from "@ngxs/store";
import {
  NgxsHmrLifeCycle,
  NgxsHmrSnapshot as Snapshot
} from "@ngxs/hmr-plugin";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { NotFoundComponent } from "./shared/not-found/not-found.component";
import { PublicModule } from "./public/public.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { LoginComponent } from "./page/login/login.component";
import { LockComponent } from "./page/lock/lock.component";
import { RegisterComponent } from "./page/register/register.component";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginComponent,
    RegisterComponent,
    LockComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    NgxsModule.forRoot([]),
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    PublicModule,
    DashboardModule
  ],
  providers: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule implements NgxsHmrLifeCycle<Snapshot> {
  public hmrNgxsStoreOnInit(
    ctx: StateContext<Snapshot>,
    snapshot: Partial<Snapshot>
  ) {
    ctx.patchState(snapshot);
  }

  public hmrNgxsStoreBeforeOnDestroy(
    ctx: StateContext<Snapshot>
  ): Partial<Snapshot> {
    return ctx.getState();
  }
}
