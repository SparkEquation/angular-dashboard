import { Component, OnInit, OnDestroy, Input } from "@angular/core";
import { SettingsService } from "app/services/settings.service";
import { ROUTES } from "./dashboard-routes.config";
import { Subscription } from "rxjs";
import { Router, NavigationEnd, ActivatedRoute } from "@angular/router";
import { filter, map, flatMap } from "rxjs/operators";

@Component({
    selector: "app-dashboard",
    templateUrl: "./dashboard.component.html",
    styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit, OnDestroy {
    public menuItems = Object.keys(ROUTES).map(key => {
        if (ROUTES[key].children) {
            ROUTES[key].children = Object.keys(ROUTES[key].children).map(k => {
                return ROUTES[key].children[k];
            });
        }
        return ROUTES[key];
    });
    public events: string[] = [];
    public opened: boolean = true;
    public shouldRun: boolean = true;
    public id: number;
    public backgroundColor: string;
    sub: Subscription;
    @Input() title: String;
    constructor(
        public settingService: SettingsService,
        private router: Router,
        private activatedRoute: ActivatedRoute
    ) {
        this.id = settingService.getSidebarImageIndex() + 1;
        this.backgroundColor = settingService.getSidebarColor();
    }

    ngOnInit() {
        console.log(this.menuItems);
        this.setTitle(this.router.routerState.snapshot.url);
        this.settingService.sidebarImageIndexUpdate.subscribe((id: number) => {
            this.id = id + 1;
        });
        this.settingService.sidebarColorUpdate.subscribe((color: string) => {
            this.backgroundColor = color;
        });
        this.sub = this.router.events
            .pipe(filter(event => event instanceof NavigationEnd))
            .subscribe((event: NavigationEnd) => {
                if (event.url !== event.urlAfterRedirects) {
                    this.setTitle(event.urlAfterRedirects);
                } else {
                    this.setTitle(event.url);
                }
            });
    }

    ngOnDestroy() {
        this.settingService.sidebarImageIndexUpdate.unsubscribe();
        this.settingService.sidebarColorUpdate.unsubscribe();
        this.sub.unsubscribe();
    }

    setTitle(url) {
        this.title = ROUTES[url].title;
    }
}
