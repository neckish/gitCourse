import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FaviconsComponent } from './favicons.component';

describe('FaviconsComponent', () => {
  let component: FaviconsComponent;
  let fixture: ComponentFixture<FaviconsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaviconsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaviconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
