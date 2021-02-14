import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "side-nav",
  styleUrls: ["./sidenav.component.scss"],
  template: `
    <section [class.sidenav]="isExpanded">
      <div class="toggle">
        <mat-icon (click)="toggleMenu.emit(null)">
          {{ isExpanded ? "keyboard_backspace" : "dehaze" }}
        </mat-icon>
      </div>

      <mat-list class="nav" *ngFor="let route of routeLinks">
        <a
          mat-list-item
          routerLinkActive="active-link"
          class="hover"
          routerLink="{{ route.link }}"
        >
          <mat-icon
            mat-list-icon
            [matTooltip]="!isExpanded ? route.name : null"
            matTooltipPosition="right"
          >
            {{ route.icon }}</mat-icon
          >
          <p matLine *ngIf="isExpanded">{{ route.name }}</p>
        </a>
      </mat-list>
    </section>
  `,
})
export class SidenavComponent {
  @Input() isExpanded: boolean;
  @Output() toggleMenu = new EventEmitter();

  public routeLinks = [
    { link: "about", name: "About", icon: "dashboard" },
    { link: "locations", name: "Locations", icon: "account_balance" },
  ];
}
