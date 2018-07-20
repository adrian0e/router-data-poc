import {MatButtonModule, MatCheckboxModule, MatToolbarModule, MatGridListModule} from '@angular/material';
import {NgModule} from '@angular/core';

@NgModule({
  imports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatGridListModule
  ],
  exports: [
    MatButtonModule,
    MatCheckboxModule,
    MatToolbarModule,
    MatGridListModule
  ],
})
export class CustomMaterialModule { }
