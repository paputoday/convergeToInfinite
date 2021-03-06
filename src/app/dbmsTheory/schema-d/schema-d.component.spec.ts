import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchemaDComponent } from './schema-d.component';

describe('SchemaDComponent', () => {
  let component: SchemaDComponent;
  let fixture: ComponentFixture<SchemaDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchemaDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchemaDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
