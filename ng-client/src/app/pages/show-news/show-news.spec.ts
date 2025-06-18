import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowNews } from './show-news';

describe('ShowNews', () => {
  let component: ShowNews;
  let fixture: ComponentFixture<ShowNews>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowNews]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowNews);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
