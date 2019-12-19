import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StyledDivShowingComponent } from './styled-div-showing.component';

describe('StyledDivShowingComponent', () => {
  let component: StyledDivShowingComponent;
  let fixture: ComponentFixture<StyledDivShowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StyledDivShowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StyledDivShowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
