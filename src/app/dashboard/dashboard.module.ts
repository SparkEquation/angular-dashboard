import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { MatInputModule } from "@angular/material/input";
import { MatMenuModule } from "@angular/material/menu";
import { MatCheckboxModule } from "@angular/material/checkbox";

import { DashboardRoutingModule } from "./dashboard-routing.module";
import { DashboardComponent } from "./dashboard.component";
import { CommonModule } from "@angular/common";
import { SidebarComponent } from "app/sidebar/sidebar.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { NavbarComponent } from "app/shared/navbar/navbar.component";
import { FigurecardComponent } from "app/shared/figurecard/figurecard.component";
import { ImagecardComponent } from "app/shared/imagecard/imagecard.component";
import { TableComponent } from "./table/table.component";
import { NotificationComponent } from "./notification/notification.component";
import { MsgIconBtnComponent } from "app/shared/msgiconbtn/msgiconbtn.component";
import { SweetAlertComponent } from "./sweetalert/sweetalert.component";
import { RootComponent } from "./root/root.component";
import { HeaderComponent } from "app/shared/header/header.component";
import { FooterComponent } from "app/shared/footer/footer.component";
import { SettingsComponent } from "./settings/settings.component";
import { PriceTableComponent } from "./component/pricetable/pricetable.component";
import { PanelsComponent } from "./component/panels/panels.component";
import { WizardComponent } from "./component/wizard/wizard.component";
import { SettingsService } from "app/services/settings.service";

@NgModule({
  declarations: [
    DashboardComponent,
    SidebarComponent,
    HomeComponent,
    ProfileComponent,
    NavbarComponent,
    FigurecardComponent,
    ImagecardComponent,
    TableComponent,
    NotificationComponent,
    MsgIconBtnComponent,
    SweetAlertComponent,
    RootComponent,
    HeaderComponent,
    FooterComponent,
    SettingsComponent,
    PriceTableComponent,
    PanelsComponent,
    WizardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatRadioModule,
    MatInputModule,
    MatMenuModule,
    MatCheckboxModule
  ],
  providers: [SettingsService]
})
export class DashboardModule {}
