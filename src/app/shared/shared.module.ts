import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { ChordDetailComponent } from './chord-detail/chord-detail.component';
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay.component';
import { VirtualScrollComponent } from './virtual-scroll/virtual-scroll.component';

@NgModule({
    imports: [ CommonModule ],
    declarations: [
        ChordDetailComponent,
        LoadingOverlayComponent,
        VirtualScrollComponent,
    ],
    exports: [
        ChordDetailComponent,
        LoadingOverlayComponent,
        VirtualScrollComponent,
    ]
})
export class SharedModule { }