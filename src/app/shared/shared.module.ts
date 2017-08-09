import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { ChordDetailComponent } from './chord-detail/chord-detail.component';
import { ChordGeneratorComponent } from './chord-generator/chord-generator.component';
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [
        ChordDetailComponent,
        ChordGeneratorComponent,
        LoadingOverlayComponent,
        VirtualScrollComponent,
    ],
    exports: [
        ChordDetailComponent,
        ChordGeneratorComponent,
        LoadingOverlayComponent,
        VirtualScrollComponent,
    ]
})
export class SharedModule { }