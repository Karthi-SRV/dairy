import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

const MODULES: any[] = [
    FormsModule,
    CommonModule,
    MaterialModule,
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
