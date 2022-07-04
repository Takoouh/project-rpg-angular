import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BeginnerBookComponent } from './beginner-book.component';

describe('BeginnerBookComponent', () => {
  let component: BeginnerBookComponent;
  let fixture: ComponentFixture<BeginnerBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BeginnerBookComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BeginnerBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
