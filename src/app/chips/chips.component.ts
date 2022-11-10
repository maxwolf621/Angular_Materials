import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';

@Component({
  selector: 'app-chips',
  templateUrl: './chips.component.html',
  styleUrls: ['./chips.component.css'],
})
export class ChipsComponent implements OnInit {
  tags = ['Typescript', 'Material', 'Angular '];

  constructor() {}

  ngOnInit() {}

  /**
   * define remove tag method
   */
  removeTag(tagName) {
    this.tags = this.tags.filter((tag) => tag !== tagName);
  }
  /**
   *
   * CDK
   * receive the tags from user-input
   */
  separatorKeysCodes = [ENTER, COMMA];

  /**
   * add new tag (no duplicates)
   */
  addTag($event: MatChipInputEvent) {
    if (($event.value || '').trim()) {
      const value = $event.value.trim();

      /**
       * check if tag exists already
       */
      if (this.tags.indexOf(value) === -1) {
        this.tags.push(value);
      }
    }

    $event.input.value = '';
  }
}
