import {Component} from '@angular/core';
import 'rxjs/add/operator/map';
import {Router} from "@angular/router";




@Component({
  selector: 'cocteilNotFaunded',
  templateUrl: './cocteilNotFaunded.html',
  styleUrls: ['./cocteilNotFaunded.css']
})

export class CocteilNotFaunded {

  constructor(
    private router: Router,
   )
  {}

  homePage():void {
    let link = [''];
    this.router.navigate(link);
  }

}
