import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassifyRequestComponent } from './classify-request.component';

describe('ClassifyRequestComponent', () => {
  let component: ClassifyRequestComponent;
  let fixture: ComponentFixture<ClassifyRequestComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClassifyRequestComponent]
    });
    fixture = TestBed.createComponent(ClassifyRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
