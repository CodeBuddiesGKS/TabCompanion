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
    private sections: string[];

    constructor(private chordService: ChordService) { }

    ngOnInit() {
        this.chordService.getChords()
        .then((allChords) => {
            this.chords = [];
            this.songSelected.chords.forEach((chord) => {
                let find = allChords.find((c) => c.name == chord)
                this.chords.push(find);
            });
        });

        this.sections = this.songSelected.sections;
    }
}