import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexTrendAnalysisComponent } from './forex-trend-analysis.component';

describe('ForexTrendAnalysisComponent', () => {
  let component: ForexTrendAnalysisComponent;
  let fixture: ComponentFixture<ForexTrendAnalysisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForexTrendAnalysisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForexTrendAnalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
