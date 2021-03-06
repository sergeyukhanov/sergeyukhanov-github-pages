import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-title-component',
  templateUrl: './title-component.component.html',
  styleUrls: ['./title-component.component.scss']
})
export class TitleComponentComponent implements OnInit {

  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
