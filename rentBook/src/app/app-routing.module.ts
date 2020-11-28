import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthorsComponent } from './views/authors/authors.component';
import { BooksComponent } from './views/books/books.component';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { RentsComponent } from './views/rents/rents.component';
import { ReportsComponent } from './views/reports/reports.component';
import { ReservationsComponent } from './views/reservations/reservations.component';
import { UsersComponent } from './views/users/users.component';

const routes: Routes = [
  {
    path: '', component: DashboardComponent
  },
  {
    path: 'users', component: UsersComponent
  },
  {
    path: 'books', component: BooksComponent
  },
  {
    path: 'authors', component: AuthorsComponent
  },
  {
    path: 'rents', component: RentsComponent
  },
  {
    path: 'reservations', component: ReservationsComponent
  },
  {
    path: 'reports', component: ReportsComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
