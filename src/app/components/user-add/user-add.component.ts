import { Component, OnInit } from '@angular/core';
import { MovieService } from '../../movie.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit() {
  	/*this.movieService.getUsers().subscribe((movies))*/
  }

}
