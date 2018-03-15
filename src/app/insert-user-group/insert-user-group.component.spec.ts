import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertUserGroupComponent } from './insert-user-group.component';

describe('InsertUserGroupComponent', () => {
  let component: InsertUserGroupComponent;
  let fixture: ComponentFixture<InsertUserGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InsertUserGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InsertUserGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
