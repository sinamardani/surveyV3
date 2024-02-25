import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TellComponent } from './tell.component';

describe('TellComponent', () => {
  let component: TellComponent;
  let fixture: ComponentFixture<TellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TellComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
