import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatawriterComponent } from './datawriter.component';

describe('DatawriterComponent', () => {
  let component: DatawriterComponent;
  let fixture: ComponentFixture<DatawriterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatawriterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatawriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
