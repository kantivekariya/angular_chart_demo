import { NgModule } from '@angular/core'
import { DragDropModule } from '@angular/cdk/drag-drop';
import {
    MatButtonModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule
} from '@angular/material';

@NgModule({
    imports: [
        MatButtonModule,
        MatCheckboxModule,
        DragDropModule,
        MatSidenavModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
    ],
    exports: [
        MatButtonModule,
        MatCheckboxModule,
        DragDropModule,
        MatSidenavModule,
        MatCardModule,
        MatFormFieldModule,
        MatInputModule
    ],
})
export class MyOwnCustomMaterialModule { }