import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreModule } from '../core/core.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

//services

import { SongComponent } from './song.component';
import { SongDetailComponent } from './song-detail/song-detail.component';
import { SongListComponent } from './song-list/song-list.component';

@NgModule({
    imports: [
        CommonModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        SharedModule
    ],
    declarations: [
        SongComponent,
        SongDetailComponent,
        SongListComponent,
    ]
})
export class SongModule {
    static forRoot(): ModuleWithProviders {
        return {
            ngModule: SongModule,
            providers: [
                //services
            ]
        }
    }
}