import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, of, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit, OnDestroy {

  constructor() { }

  ngOnInit(): void {
    of(2, 3, 4)
      .pipe(
        map(f => f * 2),
        tap(f => console.log(f)),
        map(f => {
          if (f === 6) {
            return Error('Six erro')
          }
          return f;
        }),
        takeUntil(this.destroy$)
      ).subscribe({
        next: (f) => console.log(`product next: ${f}`),
        error: (err) => console.log(`product error: ${err}`),
        complete: () => console.log("product complete:")
      })
  }
  destroy$ = new Subject<void>();
  ngOnDestroy() {
    //this.destroy$.next();
  }
}
