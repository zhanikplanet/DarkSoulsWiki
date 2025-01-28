import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarkSouls1Component } from './dark-souls-1.component';

describe('DarkSouls1Component', () => {
  let component: DarkSouls1Component;
  let fixture: ComponentFixture<DarkSouls1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DarkSouls1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarkSouls1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
