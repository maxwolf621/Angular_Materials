import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';
import { MatFormFieldComponent } from './mat-form-field/mat-form-field.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SidenavComponent } from './sidenav/sidenav.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatListComponent } from './mat-list/mat-list.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { ChipsComponent } from './chips/chips.component';
import { CardComponent } from './card/card.component';
import { TableComponent } from './table/table.component';
import { TooltipsSnackbarComponent } from './tooltips-snackbar/tooltips-snackbar.component';
import { HttpClientModule } from '@angular/common/http';
import { MatTableGroupComponent } from './mat-table-group/mat-table-group.component';
import { MatTableComponent } from './mat-table/mat-table.component';
@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    SidenavComponent,
    GridListComponent,
    ExpansionPanelComponent,
    ChipsComponent,
    CardComponent,
    TableComponent,
    MatListComponent,
    TooltipsSnackbarComponent,
    MatFormFieldComponent,
    MatTableGroupComponent,
    MatTableComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
