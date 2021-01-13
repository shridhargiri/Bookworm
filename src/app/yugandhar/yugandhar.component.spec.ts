import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YugandharComponent } from './yugandhar.component';

describe('YugandharComponent', () => {
  let component: YugandharComponent;
  let fixture: ComponentFixture<YugandharComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YugandharComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YugandharComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
