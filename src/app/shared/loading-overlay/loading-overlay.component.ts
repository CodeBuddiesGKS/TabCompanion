import { Component } from '@angular/core';

import { CoreService } from '../../core/core.service';

@Component({
    selector: 'loading-overlay',
    templateUrl: './loading-overlay.component.html',
    styleUrls: ['./loading-overlay.component.scss']
})
export class LoadingOverlayComponent {
    public loading: boolean = false;
    
    constructor(coreService: CoreService) {
        coreService.loading.subscribe((isLoading) => {
            this.loading = isLoading;
        });
    }
}