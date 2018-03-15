import { Component, OnInit } from '@angular/core';

import { ResponseOptions } from '@angular/http';
import { CookieService } from 'ngx-cookie-service';

import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { CommunicationService } from '../shared/services/index';
import {FormGroup, AbstractControl, FormBuilder, Validators} from '@angular/forms';
import { FormGroupDirective } from '@angular/forms/src/directives/reactive_directives/form_group_directive';

import * as $ from 'jquery';
import { log } from 'util';
@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
    
   
    constructor(public router: Router, public com : CommunicationService,private cookieService: CookieService) {
    }
    loginForm = {
        "login_user":true,
        "login_identity":'admin@admin.com',
        "login_password":'password123',
        "remember_me":1
    };
    
    ngOnInit() {
        //this.router.navigate(['dashboard']);



    }

   
        onLoggedin() {
            
            //console.log(this.loginForm);
            
           // this.com.makeLogin(this.loginForm).subscribe();
            this.com.login(this.loginForm).subscribe(
                data => {
                
                    console.log(data) ;
                    var login_session_token = data.session.userdata.flexi_auth.login_session_token;
                    this.cookieService.set( 'login_session_token', login_session_token );
                    
                    console.log(this.cookieService.get('login_session_token'));
                    localStorage.setItem('isLoggedin','true');
                    this.router.navigate(['dashboard']);
                
            });

            //this.com.logout().subscribe();

            /*
            this.com.login(this.loginForm).subscribe(
                data => {
                    console.log(data);
                    var login_session_token = data.session.userdata.flexi_auth.login_session_token;
                    this.cookieService.set( 'login_session_token', login_session_token );
                    
                    console.log(this.cookieService.get('login_session_token'));
                    this.com.getUsers().subscribe(data => {console.log(data) });
                    
                    //localStorage.setItem('isLoggedin','true');
                    //this.router.navigate(['/dashboard']);         
                }

            );
            */
                
            
        }

        
           
             
    

    
}
