import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class ChordService {

    constructor(private http: Http) {}

    public getChords() {
        return this.http.get('assets/chords.json')
        .toPromise()
        .then((res) => res.json());
    }
}