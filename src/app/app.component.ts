import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { EMPTY, Observable, of, take, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public target$: Observable<string> = EMPTY;

  ngOnInit() {
    setTimeout(() => {
      this.target$ =  of('SET FIRST').pipe(take(1));
    }, 200);
  }
}
