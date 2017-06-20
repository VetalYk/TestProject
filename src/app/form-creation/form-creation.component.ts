import { Component, OnInit, Input, Output, OnChanges, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'form-creation',
  templateUrl: './form-creation.component.html',
  styleUrls: ['./form-creation.component.css'],
  animations: [
    trigger('showForm', [
      state('inactive', style({
        opacity: 0,
        display: 'none'
      })),
      state('active',   style({
         opacity: 1,
         display: 'block',
      })),
      transition('inactive => active', animate('400ms')),
      transition('active => inactive', animate('300ms'))
    ])
  ]
})
export class FormCreationComponent implements OnInit, OnChanges {
    private _showForm = 'inactive';
    @Input() public addedLink = false;
    @Output() close = new EventEmitter<boolean>();
    closeForm() {
        this._showForm = 'inactive'
        setTimeout(() => {
            this.close.emit();
        }, 200)
    }
    constructor() { }


    ngOnChanges() {
      if (this.addedLink) {
        this._showForm = 'active';
      }
    }
    ngOnInit() {}

}
