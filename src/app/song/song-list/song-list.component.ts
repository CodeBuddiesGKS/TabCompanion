import { Component, OnInit, Output, EventEmitter, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';

import { CoreService } from '../../core/core.service';

import { CurrentSongPage } from '../shared/models/current-song-page';
import { ListItem } from '../../core/models/list-item';
import { ObjectListItems } from '../../core/models/object-list-items';
import { Song } from '../../core/models/song';
import "rxjs/Rx";

@Component({
    selector: 'song-list',
    templateUrl: './song-list.component.html',
    styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {
    @Output() songSelected = new EventEmitter<Song>();
    @Output() navigateTo = new EventEmitter<CurrentSongPage>();
    protected items: ObjectListItems = new ObjectListItems();
    private data: any;
    private filteredData: any;
    private forceRefresh: boolean = false;
    private scrollItems: ListItem[] = [];
    private searchValue: string = "";
    private indices: any;

    constructor(private coreService: CoreService,
                private http: Http) { }

    //at init time we only need the length
    ngOnInit() {
        this.http.get('assets/songs.json')
        .map(response => response.json()).toPromise()
        .then(data => {
            this.data = data;
            this.filteredData = data;
            this.items.length = data.length;
        });
    }

    //fired when scrolling
    onUpdate(event) {
        let start = event.start;
        let end = event.end;

        if (this.data) {
            this.scrollItems = this.filteredData.slice(start, end);
        }
    }

    filter() {
        this.filteredData = this.data;

        if (this.searchValue) {
            this.filteredData = this.filteredData.filter((item) => {
                let artistBool = item.artist.toLowerCase().includes(this.searchValue.toLowerCase())
                let titleBool = item.title.toLowerCase().includes(this.searchValue.toLowerCase())
                return (artistBool || titleBool);
            });
        }

        this.items.length = this.filteredData.length;
        this.forceRefresh = !this.forceRefresh;
    }

    itemClass(index: number) {
        if (index % 2 == 0) {
            return {'even-col': true};
        } else {
            return {'odd-col': true}
        }
    }

    linkClass(index: number) {
        if (index % 2 == 0) {
            return {'link-green': true};
        } else {
            return {'link-white': true}
        }
    }

    openSongDetail(song) {
        //this.coreService.load();
        this.songSelected.emit(song);
        this.navigateTo.emit(CurrentSongPage.SongDetail);
    }
}