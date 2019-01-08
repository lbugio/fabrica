import {MatButtonModule, MatCheckboxModule,  MAT_DATE_LOCALE} from '@angular/material';
import {NgModule} from '@angular/core';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatDatepickerModule,} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from '@angular/material';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatChipsModule} from '@angular/material/chips';
import {MatFormFieldModule} from '@angular/material'
import {MatDialogModule} from '@angular/material/dialog';
import {MatGridListModule} from '@angular/material/grid-list';


@NgModule({
  imports: [ MatGridListModule, MatDialogModule, MatFormFieldModule,MatButtonModule, MatCheckboxModule,MatDividerModule, MatSidenavModule,MatMenuModule, MatCardModule,MatDatepickerModule,MatInputModule,MatNativeDateModule,MatAutocompleteModule,MatChipsModule],
  exports: [ MatGridListModule, MatDialogModule, MatFormFieldModule, MatButtonModule, MatCheckboxModule,MatDividerModule, MatSidenavModule,MatMenuModule, MatCardModule,MatDatepickerModule,MatInputModule,MatNativeDateModule, MatAutocompleteModule, MatChipsModule],
  providers: [
    {provide: MAT_DATE_LOCALE, useValue: 'en-GB'},
  ],
})
export class MaterialModule { }