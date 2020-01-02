import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageUserDetailsComponent } from './page-user-details.component';

describe('PageUserDetailsComponent', () => {
  let component: PageUserDetailsComponent;
  let fixture: ComponentFixture<PageUserDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageUserDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageUserDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
