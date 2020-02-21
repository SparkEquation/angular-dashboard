import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { TableComponent } from "./table/table.component";
import { NotificationComponent } from "./notification/notification.component";
import { SweetAlertComponent } from "./sweetalert/sweetalert.component";
import { SettingsComponent } from "./settings/settings.component";
import { PriceTableComponent } from "./component/pricetable/pricetable.component";
import { PanelsComponent } from "./component/panels/panels.component";
import { WizardComponent } from "./component/wizard/wizard.component";

const routes: Routes = [
    {
        path: "",
        redirectTo: "home",
        pathMatch: "full",
        data: {
            title: "Home"
        }
    },
    { path: "home", component: HomeComponent, data: { title: "Home" } },
    {
        path: "profile",
        component: ProfileComponent,
        data: { title: "Profile" }
    },
    { path: "table", component: TableComponent, data: { title: "Table" } },
    {
        path: "notification",
        component: NotificationComponent,
        data: { title: "Home" }
    },
    { path: "alert", component: SweetAlertComponent, data: { title: "Alert" } },
    {
        path: "settings",
        component: SettingsComponent,
        data: { title: "Settings" }
    },
    {
        path: "components/price-table",
        component: PriceTableComponent,
        data: { title: "Price Table" }
    },
    {
        path: "components/panels",
        component: PanelsComponent,
        data: { title: "Panels" }
    },
    {
        path: "components/wizard",
        component: WizardComponent,
        data: { title: "Home" }
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ContentRoutingModule {}
