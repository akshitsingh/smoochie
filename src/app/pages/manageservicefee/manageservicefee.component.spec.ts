import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageservicefeeComponent } from './manageservicefee.component';

describe('ManageservicefeeComponent', () => {
  let component: ManageservicefeeComponent;
  let fixture: ComponentFixture<ManageservicefeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageservicefeeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageservicefeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
