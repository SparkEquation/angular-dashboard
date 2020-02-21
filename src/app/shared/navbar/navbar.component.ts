import { Component, OnInit, Input } from "@angular/core";
import {
    ActivatedRoute,
    Router,
    RoutesRecognized,
    ActivationEnd
} from "@angular/router";
import { map, find } from "rxjs/operators";

@Component({
    selector: "app-navbar",
    templateUrl: "./navbar.component.html",
    styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent implements OnInit {
    @Input() title: string;

    constructor(private router: Router, activatedRoute: ActivatedRoute) {
        this.router.events.subscribe(data => {
            if (data instanceof ActivationEnd && data.snapshot.data.title) {
                this.title = data.snapshot.data.title;
            }
        });
    }

    ngOnInit() {}

    menuClick() {
        // document.getElementById('main-panel').style.marginRight = '260px';
    }
}
