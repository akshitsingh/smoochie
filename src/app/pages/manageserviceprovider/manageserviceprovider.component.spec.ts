import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageserviceproviderComponent } from './manageserviceprovider.component';

describe('ManageserviceproviderComponent', () => {
  let component: ManageserviceproviderComponent;
  let fixture: ComponentFixture<ManageserviceproviderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageserviceproviderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageserviceproviderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
