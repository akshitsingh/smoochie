import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditmanageusersComponent } from './editmanageusers.component';

describe('EditmanageusersComponent', () => {
  let component: EditmanageusersComponent;
  let fixture: ComponentFixture<EditmanageusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditmanageusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditmanageusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
