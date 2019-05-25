import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CatDeleteComponent } from './cat-delete.component';

describe('CatDeleteComponent', () => {
  let component: CatDeleteComponent;
  let fixture: ComponentFixture<CatDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CatDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CatDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
