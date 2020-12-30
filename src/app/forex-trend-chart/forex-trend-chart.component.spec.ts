import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForexTrendChartComponent } from './forex-trend-chart.component';

describe('ForexTrendChartComponent', () => {
  let component: ForexTrendChartComponent;
  let fixture: ComponentFixture<ForexTrendChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForexTrendChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForexTrendChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
