import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, of, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

  constructor() { }

  destroy$ = new Subject<void>();
  ngOnDestroy() {
    this.destroy$.next();
  }

  ngOnInit(): void {
    of(1, 2, 3)
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

}
