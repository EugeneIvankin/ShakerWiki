import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";



@Component({
  moduleId: module.id,
  selector: 'addedCocteil',
  templateUrl: 'addedCocteil.html',
  styleUrls: ['addedCocteil.css']
})
export class AddedCocteil{
  constructor(
    private router: Router,
  )
  {}

  homePage():void {
    let link = [''];
    this.router.navigate(link);
  }

}
