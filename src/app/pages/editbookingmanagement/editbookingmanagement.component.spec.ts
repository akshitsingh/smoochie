import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditbookingmanagementComponent } from './editbookingmanagement.component';

describe('EditbookingmanagementComponent', () => {
  let component: EditbookingmanagementComponent;
  let fixture: ComponentFixture<EditbookingmanagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditbookingmanagementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditbookingmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
