import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgApexchartsModule } from "ng-apexcharts";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './shared/menu/menu.component';
import { HeaderProfileComponent } from './shared/header-profile/header-profile.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { CardComponent } from './core/card/card.component';
import { IncomesComponent } from './core/incomes/incomes.component';
import { ExpensesComponent } from './core/expenses/expenses.component';
import { CreditsComponent } from './core/credits/credits.component';
import { LastTransactionsComponent } from './core/last-transactions/last-transactions.component';
import { BalanceChartComponent } from './core/balance-chart/balance-chart.component';

@NgModule({
  declarations: [AppComponent, LoginComponent, HomeComponent, MenuComponent, HeaderProfileComponent, CardComponent, IncomesComponent, ExpensesComponent, CreditsComponent, LastTransactionsComponent, BalanceChartComponent],
  imports: [BrowserModule, NgApexchartsModule, AppRoutingModule, ReactiveFormsModule,FormsModule, BrowserAnimationsModule, provideFirebaseApp(() => initializeApp(environment.firebase)), provideFirestore(() => getFirestore())],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
