import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CooperativeComponent } from './cooperative.component';

describe('CooperativeComponent', () => {
  let component: CooperativeComponent;
  let fixture: ComponentFixture<CooperativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CooperativeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CooperativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
