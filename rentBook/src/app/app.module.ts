import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { UsersComponent } from './views/users/users.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { UserFormDialogComponent } from './views/users/user-form-dialog/user-form-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BooksComponent } from './views/books/books.component';
import { AuthorsComponent } from './views/authors/authors.component';
import { RentsComponent } from './views/rents/rents.component';
import { ReservationsComponent } from './views/reservations/reservations.component';
import { ReportsComponent } from './views/reports/reports.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    UsersComponent,
    UserFormDialogComponent,
    NavbarComponent,
    BooksComponent,
    AuthorsComponent,
    RentsComponent,
    ReservationsComponent,
    ReportsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    MatButtonToggleModule,
    MatCardModule,
    FlexLayoutModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
