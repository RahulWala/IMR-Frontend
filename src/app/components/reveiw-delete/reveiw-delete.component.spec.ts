import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReveiwDeleteComponent } from './reveiw-delete.component';

describe('ReveiwDeleteComponent', () => {
  let component: ReveiwDeleteComponent;
  let fixture: ComponentFixture<ReveiwDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReveiwDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReveiwDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
