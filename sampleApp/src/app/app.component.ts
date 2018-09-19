import {Component} from '@angular/core';
import {TestServiceService} from "./test-service.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private  ts: TestServiceService) {
  }

  textInput(event) {
    this.ts.setText(event);
  }

}
