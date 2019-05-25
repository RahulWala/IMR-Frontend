import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MovieService } from '../../movie.service';
var UsersComponent = /** @class */ (function () {
    function UsersComponent(movieService) {
        this.movieService = movieService;
    }
    UsersComponent.prototype.ngOnInit = function () {
        this.movieService.getUsers().subscribe(function (data) {
            console.log("Hello", data);
        });
        var x = 1;
        this.movieService.getUsersById(x).subscribe(function (data) {
            console.log(data);
        });
    };
    UsersComponent = tslib_1.__decorate([
        Component({
            selector: 'app-users',
            templateUrl: './users.component.html',
            styleUrls: ['./users.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [MovieService])
    ], UsersComponent);
    return UsersComponent;
}());
export { UsersComponent };
//# sourceMappingURL=users.component.js.map