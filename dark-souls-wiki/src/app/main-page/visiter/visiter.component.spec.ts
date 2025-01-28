import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisiterComponent } from './visiter.component';

describe('VisiterComponent', () => {
  let component: VisiterComponent;
  let fixture: ComponentFixture<VisiterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisiterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisiterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
