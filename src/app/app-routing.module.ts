import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddauthorComponent } from './addauthor/addauthor.component';
import { AddbookComponent } from './addbook/addbook.component';
import { AuthorsComponent } from './authors/authors.component';
import { BooksComponent } from './books/books.component';
import { LoginComponent } from './login/login.component';
import { UpdateauthorComponent } from './updateauthor/updateauthor.component';
import { UpdatebookComponent } from './updatebook/updatebook.component';
import { AuthguardGuard } from './authguard.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/books',
    pathMatch: 'full'
  },

  {
    path: 'books',
    component: BooksComponent
  },

  {
    path: 'authors',
    component:AuthorsComponent
  },
  {
    path: 'addbook',
    canActivate: [AuthguardGuard],
    component: AddbookComponent
  },

  {
    path: 'addauthor',
    canActivate: [AuthguardGuard],
    component: AddauthorComponent
  },
  { path: 'updatebook',
   component: UpdatebookComponent },

   { path: 'updateauthor',
   component: UpdateauthorComponent},

  { path: 'login',
   component: LoginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
