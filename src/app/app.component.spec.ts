import { TestBed, tick } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { EMPTY, delay, of } from 'rxjs';
import { By } from '@angular/platform-browser';

describe('AppComponent', () => {
  beforeEach(() => TestBed.configureTestingModule({
    declarations: [AppComponent]
  }));

  it(`should have loading while loading'`, async () => {
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();

    fixture.detectChanges();

    fixture.componentInstance.target$ = of('BAD').pipe(delay(10000));
    fixture.detectChanges();

    await new Promise((resolve) => setTimeout(resolve, 1000))

    fixture.detectChanges();
    fixture.detectChanges();


    const elsResult = fixture.nativeElement.querySelectorAll('.result');
    const elsSpinner = fixture.nativeElement.querySelectorAll('.spinner');

    console.log('check')
    expect(elsResult.length).toEqual(0);
    expect(elsSpinner.length).toEqual(1);
  });

  it('should have result', async () => {
    const fixture = TestBed.createComponent(AppComponent);
    await fixture.whenStable();

    fixture.detectChanges();

    await new Promise((resolve) => setTimeout(resolve, 800))

    fixture.detectChanges();

    console.log(fixture.debugElement)
    const elsResult = fixture.nativeElement.querySelectorAll('.result');
    const elsSpinner = fixture.nativeElement.querySelectorAll('.spinner');

    console.log('check')
    expect(elsResult.length).toEqual(1);
    expect(elsSpinner.length).toEqual(0);
  });
});
