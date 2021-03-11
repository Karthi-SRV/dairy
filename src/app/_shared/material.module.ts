import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

const MODULES: any[] = [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
];

@NgModule({
    imports: [
        ...MODULES,
    ],
    declarations: [],
    providers: [],
    entryComponents: [],
    exports: [
        ...MODULES,
    ]
})

export class MaterialModule { }
