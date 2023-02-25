import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tab4ComponentComponent } from './tab4-component.component';

describe('Tab4ComponentComponent', () => {
  let component: Tab4ComponentComponent;
  let fixture: ComponentFixture<Tab4ComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Tab4ComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tab4ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
