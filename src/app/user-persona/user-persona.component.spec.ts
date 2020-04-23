import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPersonaComponent } from './user-persona.component';

describe('UserPersonaComponent', () => {
  let component: UserPersonaComponent;
  let fixture: ComponentFixture<UserPersonaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPersonaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPersonaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
