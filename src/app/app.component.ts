import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  styles: [
    `
      .content-container {
        min-height: 100vh;
        box-sizing: border-box;
        padding: 25px;
      }
    `,
  ],
  template: `
    <mat-sidenav-container autosize>
      <mat-sidenav
        #sidenav
        fixedInViewport="true"
        mode="side"
        opened="{{ isExpanded }}"
      >
        <side-nav
          (toggleMenu)="toggleMenu()"
          [isExpanded]="isExpanded"
        ></side-nav>
      </mat-sidenav>

      <mat-sidenav-content [style.margin-left.px]="!isExpanded ? 60 : 250">
        <div class="content-container">
          <router-outlet></router-outlet>
        </div>
      </mat-sidenav-content>
    </mat-sidenav-container>
  `,
})
export class AppComponent {
  public isExpanded = false;

  public toggleMenu() {
    this.isExpanded = !this.isExpanded;
  }
}
