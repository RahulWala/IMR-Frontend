import { async, TestBed } from '@angular/core/testing';
import { ReveiwDeleteComponent } from './reveiw-delete.component';
describe('ReveiwDeleteComponent', function () {
    var component;
    var fixture;
    beforeEach(async(function () {
        TestBed.configureTestingModule({
            declarations: [ReveiwDeleteComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = TestBed.createComponent(ReveiwDeleteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
//# sourceMappingURL=reveiw-delete.component.spec.js.map