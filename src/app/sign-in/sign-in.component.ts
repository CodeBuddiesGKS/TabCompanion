import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CoreService } from '../core/core.service';

@Component({
    selector: 'sign-in',
    templateUrl: './sign-in.component.html',
    styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
    private email: string = "";
    private password: string = "";
    private signinError: boolean = false;

    constructor(private coreService: CoreService,
                private router: Router) {}
    
    ngOnInit() {
        //this.coreService.loading.emit(true);
        this.coreService.load();
    }

    signIn() {
        this.signinError = false;
        if (this.email.length > 0
            && this.password.length > 0
            && this.validateEmail(this.email)
            && this.validatePassword(this.password)) {
            console.log('Check database for user');
            this.router.navigate(['/song']);
        } else {
            this.signinError = true;
        }
    }

    validateEmail(str) {
        let email = str.replace(/^[A-Z0-9._+“”-]+@[A-Z0-9.-]+\.[A-Z0-9.-]+$/i,"");
        if(!email.length){ 
            return true;
        }
        return false;
    }

    validatePassword(str) {
        return true;
    }
    
    getCookie(name) {
        function escape(s) { return s.replace(/([.*+?\^${}()|\[\]\/\\])/g, '\\$1'); };
        var match = document.cookie.match(RegExp('(?:^|;\\s*)' + escape(name) + '=([^;]*)'));
        return match ? match[1] : null;
    }
}