import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FilterRepo } from './state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  destroy$ = new Subject<void>();
  constructor(private filterRepo: FilterRepo) {

  }
  filter: Map<string, string[]> = new Map<string, string[]>();
  ngOnInit() {
    this.filterRepo.filter$.subscribe(f => {
      debugger;
      console.log(f);
      this.filter = f;
    });
    this.filter.set('supllier', ['name', 'name2']);
    this.filterRepo.load(this.filter);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  update() {
    debugger;
    this.filter.set('supplier', ['update-name']);
    this.filter.set('field', ['update-field']);
    this.filterRepo.load(this.filter);
  }
}

