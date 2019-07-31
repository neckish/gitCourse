import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ModuleWithProviders } from "@angular/core";

//Import components for Routing
import { LoginComponent } from "./login/login.component";
import { HomeComponent } from "./home/home.component";
const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "login", component: LoginComponent }
  //{ path: "**", redirectTo: "" }
];

export const appRoutingProviders: any[] = [];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
