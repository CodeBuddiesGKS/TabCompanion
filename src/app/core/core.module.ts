import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { CoreService } from './core.service';

@NgModule({
    imports: [ CommonModule ]
})
export class CoreModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: CoreModule,
            providers: [
                CoreService
            ]
        }
    }
}