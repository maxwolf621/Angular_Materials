import { Component, VERSION } from '@angular/core';
import { routesConfig } from './routesConfig';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  coms: routesConfig[] = [
    { name: 'home', link: 'home', color: 'accent' },
    { name: 'sidenav', link: 'sidenav' },
    { name: 'gridlist', link: 'gridlist' },
    { name: 'matlist', link: 'matlist' },
    { name: 'expansion-panel', link: 'expansion-panel' },
    { name: 'chips&snackbar', link: 'chips' },
    { name: 'table', link: 'table' },
    { name: 'card', link: 'card' },
    { name: 'tooltips-snackbar', link: 'tooltips-snackbar' },
    { name: 'mat-form-field', link: 'mat-form-field' },
    { name: 'mat-table-group', link: 'mat-table-group' },
    { name: 'mat-table with Filter', link: 'mat-table' },
  ];
}
