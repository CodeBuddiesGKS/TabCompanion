import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { ChordService } from '../../core/chord.service';

import { Chord } from '../../core/models/chord';
import { Song } from '../../core/models/song';

@Component({
    selector: 'song-detail',
    templateUrl: './song-detail.component.html',
    styleUrls: ['./song-detail.component.scss']
})
export class SongDetailComponent implements OnInit {
    @Input() songSelected: Song;

    private chords: Chord[];

    constructor(private chordService: ChordService) { }

    ngOnInit() {
        this.chordService.getChords()
        .then((res) => this.chords = res);
    }
}