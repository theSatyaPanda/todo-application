import { NgModule } from '@angular/core';

import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [],
  imports: [
    MatListModule, MatButtonModule,MatIconModule, MatFormFieldModule, MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule
  ],
  exports: [MatListModule,MatButtonModule,MatIconModule, MatFormFieldModule,MatInputModule, MatDatepickerModule, MatNativeDateModule, MatSelectModule]
})
export class MaterialModule { }
