import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WealthSummaryComponent } from './wealth-summary.component';

describe('WealthSummaryComponent', () => {
  let component: WealthSummaryComponent;
  let fixture: ComponentFixture<WealthSummaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WealthSummaryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WealthSummaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
