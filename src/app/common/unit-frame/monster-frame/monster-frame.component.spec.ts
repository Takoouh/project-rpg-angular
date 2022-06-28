import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonsterFrameComponent } from './monster-frame.component';

describe('MonsterFrameComponent', () => {
  let component: MonsterFrameComponent;
  let fixture: ComponentFixture<MonsterFrameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonsterFrameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonsterFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
