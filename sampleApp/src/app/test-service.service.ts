import {Injectable} from '@angular/core';

@Injectable()
export class TestServiceService {

  text: string = "Starting Text";

  constructor() {
  }

  setText(txt: string) {
    this.text = txt;
  }

  getText(): string {
    return this.text;
  }

}
