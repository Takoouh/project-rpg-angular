import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CharactersFileComponent } from './characters-file.component';

describe('CharactersFileComponent', () => {
  let component: CharactersFileComponent;
  let fixture: ComponentFixture<CharactersFileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CharactersFileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CharactersFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
