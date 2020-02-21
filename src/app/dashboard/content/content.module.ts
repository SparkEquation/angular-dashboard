import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ContentRoutingModule } from "./content-routing.module";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { NavbarComponent } from "app/shared/navbar/navbar.component";
import { FigurecardComponent } from "app/shared/figurecard/figurecard.component";
import { ImagecardComponent } from "app/shared/imagecard/imagecard.component";
import { TableComponent } from "./table/table.component";
import { NotificationComponent } from "./notification/notification.component";
import { MsgIconBtnComponent } from "app/shared/msgiconbtn/msgiconbtn.component";
import { SweetAlertComponent } from "./sweetalert/sweetalert.component";
import { HeaderComponent } from "app/shared/header/header.component";
import { FooterComponent } from "app/shared/footer/footer.component";
import { SettingsComponent } from "./settings/settings.component";
import { PriceTableComponent } from "./component/pricetable/pricetable.component";
import { PanelsComponent } from "./component/panels/panels.component";
import { WizardComponent } from "./component/wizard/wizard.component";
import { MatMenuModule } from "@angular/material/menu";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { MatRadioModule } from "@angular/material/radio";
import { MatCheckboxModule } from "@angular/material/checkbox";

@NgModule({
    declarations: [
        HomeComponent,
        ProfileComponent,
        FigurecardComponent,
        ImagecardComponent,
        TableComponent,
        NotificationComponent,
        SweetAlertComponent,
        HeaderComponent,
        FooterComponent,
        SettingsComponent,
        PriceTableComponent,
        PanelsComponent,
        WizardComponent
    ],
    imports: [
        CommonModule,
        ContentRoutingModule,
        MatMenuModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatRadioModule,
        MatInputModule,
        MatMenuModule,
        MatCheckboxModule
    ]
})
export class ContentModule {}
