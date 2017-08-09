import { Component, OnInit } from '@angular/core';

import { ChordService } from '../../core/chord.service';

import { Chord } from '../../core/models/chord';
import { Song } from '../../core/models/song';

@Component({
    selector: 'chord-generator',
    templateUrl: './chord-generator.component.html',
    styleUrls: ['./chord-generator.component.scss']
})
export class ChordGeneratorComponent implements OnInit {
    private fretSelection: number[] = [ 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ];
    private sideSelection: number[] = [ 0, 0, 0, 0, 0, 0 ];

    constructor(private chordService: ChordService) { }

    ngOnInit() {
    }

    incrementFretSelection(fret) {
        this.fretSelection[fret] == 5 ? this.fretSelection[fret] = 0 : this.fretSelection[fret]++;
    }

    incrementSideSelection(string) {
        this.sideSelection[string] == 2 ? this.sideSelection[string] = 0 : this.sideSelection[string]++;
    }
}