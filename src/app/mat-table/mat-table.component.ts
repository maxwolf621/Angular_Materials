import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {
  debounceTime,
  distinctUntilChanged,
  fromEvent,
  Observable,
} from 'rxjs';

@Component({
  selector: 'app-mat-table',
  templateUrl: './mat-table.component.html',
  styleUrls: ['./mat-table.component.css'],
})
export class MatTableComponent implements OnInit {
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sortTable') sortTable: MatSort;

  @ViewChild('filter') filter: ElementRef;

  // binding with MatPaginator
  currentPage: PageEvent;

  // binding with MatSortChange$event
  currentSort: Sort;

  // dataSource
  emailsDataSource = new MatTableDataSource<any>();

  totalCount: number; // of data from emailsDataSource

  // filter
  currentFilterData: string;

  constructor(private httpClient: HttpClient) {}

  ngOnInit() {
    // subscribe the data from #paginator
    this.currentPage = {
      pageIndex: 0, //  xth-page
      pageSize: 10, // items/per-page
      length: null,
    };

    // Bind attributes
    // from MatSortChange's $event
    this.currentSort = {
      // active
      active: '',
      // direction asc | desc | ""
      direction: '',
    };
    this.getIssuees();
  }

  ngAfterViewInit() {
    // subscribe paginator's attributes
    this.paginator.page.subscribe((page: PageEvent) => {
      console.log(page);
      this.currentPage = page;
      this.getIssuees();
    });

    // filter
    /*
    fromEvent(this.filter.nativeElement, 'keyup')
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe(() => {
        console.log('keyword : ' + this.filter.nativeElement.value);
        this.emailsDataSource.filter = (
          this.filter.nativeElement as HTMLInputElement
        ).value;
      });
    this.emailsDataSource.filterPredicate = (
      data: any,
      filter: string
    ): boolean => {
      return data.title.indexOf(filter) !== -1;
    };
    */

    fromEvent(this.filter.nativeElement, 'keyup')
      .pipe(debounceTime(200), distinctUntilChanged())
      .subscribe((filterData: string) => {
        console.log(filterData);
        this.currentFilterData = filterData;
        this.getIssuees();
      });
  }

  changeSort(sortInfo: Sort) {
    console.log(sortInfo);
    console.log('sortInfo.active : ', sortInfo.active);
    if (sortInfo.active === 'created_at') {
      sortInfo.active = 'created';
    }
    this.currentSort = sortInfo;
    this.getIssuees();
  }

  getIssuees() {
    // &page : #paginator.pageIndex
    // &per_page : #paginator.pagesize
    const baseUrl =
      'https://api.github.com/search/issues?q=repo:angular/components';
    let targetUrl = `${baseUrl}&page=${
      this.currentPage.pageIndex + 1
    }&per_page=${this.currentPage.pageSize}`;

    // &order: MatSortChange$event.direction
    // &sort : MatSortChange$event.active
    if (this.currentSort.direction) {
      targetUrl = `${targetUrl}&&sort=${this.currentSort.active}&order=${this.currentSort.direction}`;
    }

    this.httpClient.get<any>(targetUrl).subscribe((data) => {
      this.totalCount = data.total_count;
      this.emailsDataSource.data = data.items;
      // 從後端進行排序時，不用指定sort
      // this.emailsDataSource.sort = this.sortTable;
      // 從後端取得資料時，就不用指定data srouce的paginator了
      //this.emailsDataSource.paginator = this.paginator;
    });
  }

  reply(emailRow) {
    console.log('回覆信件', emailRow);
  }

  delete(emailRow) {
    console.log('刪除信件', emailRow);
  }
}
