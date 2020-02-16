import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";

import { NgxsModule, StateContext } from "@ngxs/store";
import {
    NgxsHmrLifeCycle,
    NgxsHmrSnapshot as Snapshot
} from "@ngxs/hmr-plugin";

@NgModule({
    declarations: [AppComponent],
    imports: [BrowserModule, AppRoutingModule, NgxsModule.forRoot([])],
    providers: [],
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
