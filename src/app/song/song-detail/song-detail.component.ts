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

    private fretSelection: number[] = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    private sideSelection: number[] = [ 0, 0, 0, 0, 0, 0 ];

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

    incrementFretSelection(fret) {
        this.fretSelection[fret] == 5 ? this.fretSelection[fret] = 0 : this.fretSelection[fret]++;
    }

    incrementSideSelection(string) {
        this.sideSelection[string] == 2 ? this.sideSelection[string] = 0 : this.sideSelection[string]++;
    }
}