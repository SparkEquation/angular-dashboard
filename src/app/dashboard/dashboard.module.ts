import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { CommonModule } from "@angular/common";
import { SettingsService } from "app/services/settings.service";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatExpansionModule } from "@angular/material/expansion";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { ContentModule } from "./content/content.module";
import { MatFormFieldModule } from "@angular/material/form-field";
import { NavbarComponent } from "app/shared/navbar/navbar.component";
import { MsgIconBtnComponent } from "app/shared/msgiconbtn/msgiconbtn.component";

@NgModule({
    declarations: [DashboardComponent, NavbarComponent, MsgIconBtnComponent],
    imports: [
        CommonModule,
        DashboardRoutingModule,
        FormsModule,
        HttpClientModule,
        MatSidenavModule,
        MatFormFieldModule,
        MatInputModule,
        MatExpansionModule,
        MatMenuModule,
        MatListModule,
        MatIconModule,
        ContentModule
    ],
    providers: [SettingsService]
})
export class DashboardModule {}
