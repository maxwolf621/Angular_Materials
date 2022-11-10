import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mat-list',
  templateUrl: './mat-list.component.html',
  styleUrls: ['./mat-list.component.css'],
})
export class MatListComponent implements OnInit {
  events: string[] = [];
  opened: boolean = true;
  constructor() {}

  ngOnInit() {}
}
