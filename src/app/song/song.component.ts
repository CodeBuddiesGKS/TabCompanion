import { Component, OnInit, OnDestroy, ChangeDetectorRef } from '@angular/core';

import { CurrentSongPage } from './shared/models/current-song-page';

@Component({
    selector: 'song',
    templateUrl: './song.component.html',
    styleUrls: ['./song.component.scss']
})
export class SongComponent implements OnInit {
    private backButtonListener: any;
    private currentPage: CurrentSongPage;

    constructor() {}
    
    ngOnInit() {
        this.backButtonListener = (event) => {
            if(event.state) {
                this.currentPage = event.state.page;
            }
        };
        window.addEventListener('popstate', this.backButtonListener, false);

        window.history.replaceState({page: 0}, "SongList");
        this.currentPage = CurrentSongPage.SongList;
    }

    ngOnDestroy() {
        window.removeEventListener('popstate', this.backButtonListener, false);
    }

    navigateTo(num) {
        window.history.pushState({page: num}, CurrentSongPage[num]);
        this.currentPage = num;
    }
}