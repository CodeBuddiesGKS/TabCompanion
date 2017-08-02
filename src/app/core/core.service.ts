import { Injectable, EventEmitter } from '@angular/core';

import { User } from './models/user';

@Injectable()
export class CoreService {
    public loading: EventEmitter<boolean> = new EventEmitter<boolean>();

    public currentUser: User;

    constructor() {}

    load() {
        this.loading.emit(true);
        setTimeout(() => {
            this.loading.emit(false);
        }, 3000);
    }
}