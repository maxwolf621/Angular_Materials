import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatTableGroupComponent } from './mat-table-group/mat-table-group.component';
import { CardComponent } from './card/card.component';
import { ChipsComponent } from './chips/chips.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { HomeComponent } from './home/home.component';
import { MatFormFieldComponent } from './mat-form-field/mat-form-field.component';
import { MatListComponent } from './mat-list/mat-list.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { TableComponent } from './table/table.component';
import { TooltipsSnackbarComponent } from './tooltips-snackbar/tooltips-snackbar.component';
import { MatTableComponent } from './mat-table/mat-table.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sidenav', component: SidenavComponent },
  { path: 'gridlist', component: GridListComponent },
  { path: 'matlist', component: MatListComponent },
  { path: 'expansion-panel', component: ExpansionPanelComponent },
  { path: 'card', component: CardComponent },
  { path: 'chips', component: ChipsComponent },
  { path: 'table', component: TableComponent },
  { path: 'tooltips-snackbar', component: TooltipsSnackbarComponent },
  { path: 'mat-form-field', component: MatFormFieldComponent },
  { path: 'mat-table-group', component: MatTableGroupComponent },
  { path: 'mat-table', component: MatTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
