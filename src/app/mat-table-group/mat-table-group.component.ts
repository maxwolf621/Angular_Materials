import { Component, OnInit } from '@angular/core';
import { MatTabChangeEvent } from '@angular/material/tabs';

@Component({
  selector: 'app-mat-table-group',
  templateUrl: './mat-table-group.component.html',
  styleUrls: ['./mat-table-group.component.css'],
})
export class MatTableGroupComponent implements OnInit {
  tabIndex = 0;
  constructor() {}

  ngOnInit() {}

  tabFocusChange($event: MatTabChangeEvent) {
    console.log(`focus變更，index：${$event.index}`);
  }

  tabSelectedIndexChange($event: number) {
    console.log(`selectedIndex變更，index：${$event}`);
  }

  tabSelectedTabChange($event: MatTabChangeEvent) {
    console.log(`selectedTab變更，index：${$event.index}`);
  }
}
