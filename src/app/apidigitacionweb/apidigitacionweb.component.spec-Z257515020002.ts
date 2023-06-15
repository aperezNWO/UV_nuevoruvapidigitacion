import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApidigitacionwebComponent } from './apidigitacionweb.component';

describe('ApidigitacionwebComponent', () => {
  let component: ApidigitacionwebComponent;
  let fixture: ComponentFixture<ApidigitacionwebComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ApidigitacionwebComponent]
    });
    fixture = TestBed.createComponent(ApidigitacionwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
