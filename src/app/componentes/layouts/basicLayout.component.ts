
import { detectBody } from '../../app.helpers';
import { Component } from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'basic',
  templateUrl: 'basicLayout.template.html',
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class BasicLayoutComponent {

  public ngOnInit():any {
    detectBody();
  }

  public onResize(){
    detectBody();
  }

}
