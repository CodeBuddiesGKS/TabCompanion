import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

//Services

import { SignInComponent } from './sign-in.component';

//Models

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        SignInComponent,
    ]
})
export class SignInModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SignInModule,
            providers: [
                //Services
            ]
        }
    }
}