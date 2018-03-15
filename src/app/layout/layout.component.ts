import { Component, OnInit } from '@angular/core';

import { CommunicationService } from '../shared/services/index';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router'; 
@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
    constructor(public com: CommunicationService,private route: ActivatedRoute){}
         
    

    ngOnInit() {}
}
