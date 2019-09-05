import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CriarContaLoginComponent } from './criar-conta-login.component';

describe('CriarContaLoginComponent', () => {
  let component: CriarContaLoginComponent;
  let fixture: ComponentFixture<CriarContaLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CriarContaLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CriarContaLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
