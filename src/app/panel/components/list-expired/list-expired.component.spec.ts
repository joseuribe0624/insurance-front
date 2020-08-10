import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListExpiredComponent } from './list-expired.component';

describe('ListExpiredComponent', () => {
  let component: ListExpiredComponent;
  let fixture: ComponentFixture<ListExpiredComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListExpiredComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListExpiredComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
