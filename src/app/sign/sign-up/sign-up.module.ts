import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {InputPlaceholderComponent} from '../../components/input-placeholder/input-placeholder.component';
import {LayoutModule} from '../../layout/layout.module';

import { SignUpRoutingModule } from './sign-up-routing.module';
import { SignUpComponent } from './sign-up.component';

@NgModule({
  imports: [
    CommonModule,
    SignUpRoutingModule,
    LayoutModule,
    ReactiveFormsModule
  ],
  declarations: [
    SignUpComponent,
  ],
  exports: [
  ]

})
export class SignUpModule { }
