import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http } from '@angular/http';

import { ListItem } from '../../core/models/list-item';
import { ObjectListItems } from '../../core/models/object-list-items';
import "rxjs/Rx";

@Component({
  selector: 'song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.scss']
})
export class SongListComponent implements OnInit {
  protected items: ObjectListItems = new ObjectListItems();
  private data: any;
  private scrollItems: ListItem[] = [];
  private indices: any;

  constructor(private http: Http) { }

    //at init time we only need the length
    ngOnInit() {
        this.http.get('assets/items.json')
        .map(response => response.json()).toPromise()
        .then(data => {
            this.items.length = data.length;
            this.data = data;
        });
    }

    //fired when scrolling
    onUpdate(event) {
        let start = event.start;
        let end = event.end;

        if (this.data) {
            this.scrollItems = this.data.slice(start, end);
        }
    }

    itemClass(index: number) {
        if (index % 2 == 0) {
            return {'even-col': true};
        } else {
            return {'odd-col': true}
        }
    }
}