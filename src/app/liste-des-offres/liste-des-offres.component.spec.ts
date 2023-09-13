import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeDesOffresComponent } from './liste-des-offres.component';

describe('ListeDesOffresComponent', () => {
  let component: ListeDesOffresComponent;
  let fixture: ComponentFixture<ListeDesOffresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeDesOffresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeDesOffresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
