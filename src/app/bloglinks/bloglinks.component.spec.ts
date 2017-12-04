import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BloglinksComponent } from './bloglinks.component';

describe('BloglinksComponent', () => {
  let component: BloglinksComponent;
  let fixture: ComponentFixture<BloglinksComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BloglinksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BloglinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
