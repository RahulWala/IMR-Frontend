import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { MovieService } from '../../movie.service';
var UserAddComponent = /** @class */ (function () {
    function UserAddComponent(movieService) {
        this.movieService = movieService;
    }
    UserAddComponent.prototype.ngOnInit = function () {
        /*this.movieService.getUsers().subscribe((movies))*/
    };
    UserAddComponent = tslib_1.__decorate([
        Component({
            selector: 'app-user-add',
            templateUrl: './user-add.component.html',
            styleUrls: ['./user-add.component.css']
        }),
        tslib_1.__metadata("design:paramtypes", [MovieService])
    ], UserAddComponent);
    return UserAddComponent;
}());
export { UserAddComponent };
//# sourceMappingURL=user-add.component.js.map