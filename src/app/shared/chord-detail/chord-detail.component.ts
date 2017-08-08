import { Component, OnInit, Input, ViewEncapsulation } from '@angular/core';

import { Chord } from '../../core/models/chord';
import { FingerPosition } from '../../core/models/finger-position';
import { Song } from '../../core/models/song';

@Component({
    selector: 'chord-detail',
    templateUrl: './chord-detail.component.html',
    styleUrls: ['./chord-detail.component.scss']
})
export class ChordDetailComponent implements OnInit {
    @Input() chord: Chord;

    private eStringPosition: FingerPosition;
    private BStringPosition: FingerPosition;
    private GStringPosition: FingerPosition;
    private DStringPosition: FingerPosition;
    private AStringPosition: FingerPosition;
    private EStringPosition: FingerPosition;

    private eStringLabel: string;
    private BStringLabel: string;
    private GStringLabel: string;
    private DStringLabel: string;
    private AStringLabel: string;
    private EStringLabel: string;

    private fretStart: number;

    constructor() { }

    ngOnInit() {
        this.eStringPosition = this.chord.fingerPositions[0];
        this.BStringPosition = this.chord.fingerPositions[1];
        this.GStringPosition = this.chord.fingerPositions[2];
        this.DStringPosition = this.chord.fingerPositions[3];
        this.AStringPosition = this.chord.fingerPositions[4];
        this.EStringPosition = this.chord.fingerPositions[5];

        this.eStringLabel = this.chord.fingerLabels[0];
        this.BStringLabel = this.chord.fingerLabels[1];
        this.GStringLabel = this.chord.fingerLabels[2];
        this.DStringLabel = this.chord.fingerLabels[3];
        this.AStringLabel = this.chord.fingerLabels[4];
        this.EStringLabel = this.chord.fingerLabels[5];

        this.fretStart = this.chord.fretStart;
    }
}