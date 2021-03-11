import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
const MODULES: any[] = [
    FormsModule,
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
];

export const SHARED_MODULES_WITH_PROVIDERS: any[] = [];

const PIPES: any[] = [
];

const ENTRY_COMPONENTS: any[] = [
];

const COMPONENTS: any[] = [
    ...ENTRY_COMPONENTS,
];

const DIRECTIVES: any[] = [
];

const PROVIDERS: any[] = [
];

@NgModule({
    imports: [
        ...MODULES,
        ...SHARED_MODULES_WITH_PROVIDERS
    ],
    declarations: [
        ...PIPES,
        ...COMPONENTS,
        ...DIRECTIVES,
    ],
    providers: [
        ...PROVIDERS
    ],
    entryComponents: [
        ...ENTRY_COMPONENTS,
    ],
    exports: [
        ...MODULES,
        ...PIPES,
        ...COMPONENTS,
        ...DIRECTIVES,
        ...ENTRY_COMPONENTS,
    ]
})

export class SharedModule {
}
