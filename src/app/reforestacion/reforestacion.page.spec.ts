import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ReforestacionPage } from './reforestacion.page';

describe('HomePage', () => {
  let component: ReforestacionPage;
  let fixture: ComponentFixture<ReforestacionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReforestacionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ReforestacionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

