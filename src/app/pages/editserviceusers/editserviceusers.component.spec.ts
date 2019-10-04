import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditserviceusersComponent } from './editserviceusers.component';

describe('EditserviceusersComponent', () => {
  let component: EditserviceusersComponent;
  let fixture: ComponentFixture<EditserviceusersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditserviceusersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditserviceusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
