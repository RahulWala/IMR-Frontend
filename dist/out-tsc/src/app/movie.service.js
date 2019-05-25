import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
        this.uri = 'http://localhost:3000';
    }
    MovieService.prototype.getUsers = function () {
        return this.http.get(this.uri + "/usrs");
    };
    MovieService.prototype.getUsersById = function (id) {
        return this.http.get(this.uri + "/usrs/" + id);
    };
    MovieService.prototype.addUser = function (user_name, email, password) {
        var user = {
            user_name: user_name,
            email: email,
            password: password
        };
        return this.http.post(this.uri + "/usrTbl", user);
    };
    MovieService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HttpClient])
    ], MovieService);
    return MovieService;
}());
export { MovieService };
//# sourceMappingURL=movie.service.js.map