import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatTableDataSource } from '@angular/material';
import { MovieUsers } from '../../movie.users.model';
import { MovieService } from '../../movie.service';

@Component({
	selector: 'app-users',
	templateUrl: './users.component.html',
	styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

	constructor(private movieService: MovieService, private router: Router) { }

	movieUsers : MovieUsers[];
	dispalyedUsers = ['Username'];
	ngOnInit(){
		this.listUser();
	}

	listUser(){
		this.movieService
		.getUsers().subscribe((data: MovieUsers[])=>{
			this.movieUsers = data;
			console.log(this.movieUsers);
		});
	}

	editUsers(id){
		this.router.navigate([`/updtUsr/{id}`]);
	}

	deleteUsers(id){
		this.movieService.deleteUsr(id).subscribe(()=>{
			this.listUser();
		});
	}
	/*ngOnDestroy(){
		this.movieService.u();
	}*/

}
