import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MistArenaComponent } from './mist-arena.component';

describe('MistArenaComponent', () => {
  let component: MistArenaComponent;
  let fixture: ComponentFixture<MistArenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MistArenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MistArenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
