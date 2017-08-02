import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class CoreService {
    public loading: EventEmitter<boolean> = new EventEmitter<boolean>();

    constructor() {}

    load() {
        this.loading.emit(true);
        setTimeout(() => {
            this.loading.emit(false);
        }, 3000);
    }
}