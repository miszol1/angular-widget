import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WealthWidgetComponent } from './wealth-widget.component';

describe('WealthWidgetComponent', () => {
  let component: WealthWidgetComponent;
  let fixture: ComponentFixture<WealthWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WealthWidgetComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WealthWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
