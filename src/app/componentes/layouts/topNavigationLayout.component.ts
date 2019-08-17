
import { detectBody } from '../../app.helpers';
import { Component } from '@angular/core';

declare var jQuery:any;

@Component({
  selector: 'topnavigationlayout',
  templateUrl: 'topNavigationlayout.template.html',
  host: {
    '(window:resize)': 'onResize()'
  }
})
export class TopNavigationLayoutComponent {

  public ngOnInit():any {
    detectBody();
  }

  public onResize(){
    detectBody();
  }

}
