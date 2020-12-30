import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexFormComponent } from './forex-form.component';

describe('ForexFormComponent', () => {
  let component: ForexFormComponent;
  let fixture: ComponentFixture<ForexFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForexFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForexFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
