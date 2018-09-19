import {Component, OnInit} from '@angular/core';
import {TestServiceService} from '../test-service.service';

@Component({
  selector: 'app-second-component',
  templateUrl: './second-component.component.html',
  styleUrls: ['./second-component.component.css']
})
export class SecondComponentComponent implements OnInit {

  secondTxt: string;

  constructor(private  ts: TestServiceService) {
  }

  ngOnInit() {
  }

}
