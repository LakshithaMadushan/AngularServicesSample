import {Component, OnInit} from '@angular/core';
import {TestServiceService} from '../test-service.service';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrls: ['./first-component.component.css']
})
export class FirstComponentComponent implements OnInit {

  firstTxt: string;

  constructor(private  ts: TestServiceService) {
  }

  ngOnInit() {
  }

}
