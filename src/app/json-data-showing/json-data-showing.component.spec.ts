import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsonDataShowingComponent } from './json-data-showing.component';

describe('JsonDataShowingComponent', () => {
  let component: JsonDataShowingComponent;
  let fixture: ComponentFixture<JsonDataShowingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsonDataShowingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsonDataShowingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
