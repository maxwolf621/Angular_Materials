import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import {
  MatPaginator,
  MatPaginatorIntl,
  PageEvent,
} from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
})
export class TableComponent implements OnInit {
  // tempRef of #paginator
  @ViewChild('paginator') paginator: MatPaginator;
  // tempRef of #sortTable
  @ViewChild('sortTable') sortTable: MatSort;

  // binding with MatPaginator
  currentPage: PageEvent;

  // binding with MatSortChange$event
  currentSort: Sort;

  emailsDataSource = new MatTableDataSource<any>();
  totalCount: number; // of data from emailsDataSource
  constructor(
    private httpClient: HttpClient,
    private matPaginatorIntl: MatPaginatorIntl
  ) {}

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

    // paginator's page/pageSize/length
    this.matPaginatorIntl.getRangeLabel = (
      page: number,
      pageSize: number,
      length: number
    ): string => {
      // if (length === 0 || pageSize === 0) return `第 0 筆、共 ${length} 筆`;

      length = Math.max(length, 0);

      const startIndex = page * pageSize;
      const endIndex =
        startIndex < length
          ? Math.min(startIndex + pageSize, length)
          : startIndex + pageSize;
      return `${startIndex + 1} - ${endIndex} th、Total : ${length}`;
    };
  }

  ngAfterViewInit() {
    this.paginator.page.subscribe((page: PageEvent) => {
      console.log(page);
      this.currentPage = page;
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
