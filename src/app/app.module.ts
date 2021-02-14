import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { Routes, RouterModule } from "@angular/router";

// material
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatIconModule } from "@angular/material/icon";
import { MatListModule } from "@angular/material/list";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatButtonModule } from "@angular/material/button";

// components
import { AppComponent } from "./app.component";
import { AboutComponent } from "./pages/about.component";
import { LocationsComponent } from "./pages/locations.component";
import { SidenavComponent } from "./sidenav/sidenav.component";

export const ROUTES: Routes = [
  {
    path: "about",
    component: AboutComponent,
  },
  {
    path: "locations",
    component: LocationsComponent,
  },

  { path: "**", redirectTo: "about" },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    LocationsComponent,
    SidenavComponent,
  ],
  imports: [
    RouterModule.forRoot(ROUTES),
    BrowserModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
