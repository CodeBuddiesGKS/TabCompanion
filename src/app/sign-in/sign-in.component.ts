import { Component, OnInit } from '@angular/core';

import { CoreService } from '../core/core.service';

@Component({
    selector: 'sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {

    constructor(private coreService: CoreService) {}
    
    ngOnInit() {
        //this.coreService.loading.emit(true);
        this.coreService.load();
    }
}