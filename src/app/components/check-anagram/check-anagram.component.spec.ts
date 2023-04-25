import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckAnagramComponent } from './check-anagram.component';

describe('CheckAnagramComponent', () => {
  let component: CheckAnagramComponent;
  let fixture: ComponentFixture<CheckAnagramComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckAnagramComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CheckAnagramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
