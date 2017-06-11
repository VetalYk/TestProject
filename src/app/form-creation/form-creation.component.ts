import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'form-creation',
  templateUrl: './form-creation.component.html',
  styleUrls: ['./form-creation.component.css'],
  animations: [
    trigger('showForm', [
      state('inactive', style({
        opacity: 0,
        display: "none"
      })),
      state('active',   style({
        //opacity: 1,
        //display: "block"
      })),
      transition('inactive => active', animate('1000ms')),
      //transition('active => inactive', animate('500ms'))
    ])
  ]
})
export class FormCreationComponent implements OnInit, OnChanges {
    @Input() public addedLink: boolean = false;
    private _showForm = 'inactive';
    constructor() { }


    ngOnChanges() {
      console.log(123)
      if(this.addedLink) {
        console.log(this.addedLink)
        //this._showForm = 'active';
      }
    }
    ngOnInit() {}

}
