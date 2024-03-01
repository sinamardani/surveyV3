import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReportdesignComponent } from './reportdesign.component';

describe('ReportdesignComponent', () => {
  let component: ReportdesignComponent;
  let fixture: ComponentFixture<ReportdesignComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReportdesignComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ReportdesignComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
