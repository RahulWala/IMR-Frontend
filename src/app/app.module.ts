import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { MatToolbarModule, MatFormFieldModule, MatOptionModule, MatSelectModule, MatIconModule, MatButtonModule, MatDividerModule, MatSnackBarModule, MatInputModule, MatCardModule, MatTableModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UsersEditComponent } from './components/users-edit/users-edit.component';
import { MoviesComponent } from './components/movies/movies.component';
import { MoviesEditComponent } from './components/movies-edit/movies-edit.component';
import { ReviewComponent } from './components/review/review.component';
import { ReviewEditComponent } from './components/review-edit/review-edit.component';
import { CategoryComponent } from './components/category/category.component';
import { CategoryEditComponent } from './components/category-edit/category-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserDeleteComponent } from './components/user-delete/user-delete.component';
import { MovieDeleteComponent } from './components/movie-delete/movie-delete.component';
import { ReveiwDeleteComponent } from './components/reveiw-delete/reveiw-delete.component';
import { CatDeleteComponent } from './components/cat-delete/cat-delete.component';

import { MovieService } from './movie.service';
import { UserAddComponent } from './components/user-add/user-add.component';
import { MovieAddComponent } from './components/movie-add/movie-add.component';
import { ReviewAddComponent } from './components/review-add/review-add.component';
import { CategoryAddComponent } from './components/category-add/category-add.component';

const routes: Routes = [
	{ path: 'usrs', component: UsersComponent },
	{ path: 'updtUsr/:id', component: UsersEditComponent },
	{ path: 'mvs', component: MoviesComponent },
	{ path: 'updtMve/:id/:name', component: MoviesEditComponent },
	{ path: 'cats', component: CategoryComponent },
	{ path: 'updtCat/:id', component: CategoryEditComponent },
	{ path: 'rvws', component: ReviewComponent },
	{ path: 'updtRvw/:u_id/:m_id', component: ReviewEditComponent },
	{ path: 'dltUsr/:id', component: UserDeleteComponent },
	{ path: 'dltRvw/:id', component: ReveiwDeleteComponent },
	{ path: 'dltMve/:id', component: MovieDeleteComponent },
	{ path: 'dltCat/:id', component: CatDeleteComponent },
];

@NgModule({
	declarations: [
		AppComponent,
		UsersComponent,
		UsersEditComponent,
		MoviesComponent,
		MoviesEditComponent,
		ReviewComponent,
		ReviewEditComponent,
		CategoryComponent,
		CategoryEditComponent,
		UserDeleteComponent,
		MovieDeleteComponent,
		ReveiwDeleteComponent,
		CatDeleteComponent,
		UserAddComponent,
		MovieAddComponent,
		ReviewAddComponent,
		CategoryAddComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		BrowserAnimationsModule,
		RouterModule.forRoot(routes),
		MatToolbarModule,
		MatFormFieldModule,
		MatOptionModule,
		MatSelectModule,
		MatIconModule,
		MatButtonModule,
		MatDividerModule,
		MatSnackBarModule,
		MatInputModule,
		MatCardModule,
		MatTableModule
	],
	providers: [MovieService],
	bootstrap: [AppComponent]
})
export class AppModule { }
