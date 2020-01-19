import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyNavComponent } from './body-nav.component';

describe('BodyNavComponent', () => {
  let component: BodyNavComponent;
  let fixture: ComponentFixture<BodyNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
