import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PiangularComponent } from './piangular.component';

describe('PiangularComponent', () => {
  let component: PiangularComponent;
  let fixture: ComponentFixture<PiangularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PiangularComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PiangularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
