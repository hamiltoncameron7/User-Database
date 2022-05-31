import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatareaderComponent } from './datareader.component';

describe('DatareaderComponent', () => {
  let component: DatareaderComponent;
  let fixture: ComponentFixture<DatareaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatareaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatareaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
