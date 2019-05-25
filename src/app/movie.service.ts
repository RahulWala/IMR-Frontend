import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MovieService {
	uri = 'http://localhost:3000';

	constructor(private http: HttpClient) { }

	getUsers(){
		return this.http.get(`${this.uri}/usrs`);
	}
	getUsersById(id){
		return this.http.get(`${this.uri}/updtUsr/{id}`);
	}

	addUser(user_name, email, password){
		const user = {
			user_name: user_name,
			email: email,
			password: password
		};
		return this.http.post(`${this.uri}/usrTbl`, user);
	}

	updateUsr(id, user_name, email, password){
		const usrData = {
			user_name: user_name,
			email: email,
			password: password
		};
		return this.http.post(`${this.uri}/updtUsr/{id}`, usrData);
	}

	deleteUsr(id){
		return this.http.get(`${this.uri}/dltUdsr/{id}`);
	}

}
