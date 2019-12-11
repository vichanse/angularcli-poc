import { NgModule } from '@angular/core';
import { EditInputComponent } from './edit-input.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutoFocusDirective } from './auto-focus.directive';

@NgModule({
  declarations: [EditInputComponent, AutoFocusDirective],
  imports: [CommonModule, FormsModule],
  exports: [EditInputComponent],
})
export class EditInputModule {}
