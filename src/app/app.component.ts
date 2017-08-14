import {Component} from '@angular/core';
import {Cocteil} from "../cocteil";
import {CocteilIngred} from "../cocteilIngred";
import {Router} from "@angular/router";



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})


export class AppComponent  {

  cocteil: Cocteil;
  cocteilIngred: CocteilIngred;

  constructor(
    private router: Router)
  {}

  searchCocteil(name: string): void {
    let link = ['/detail',name];
    this.router.navigate(link);
  }

  homePage():void {
    let link = [''];
    this.router.navigate(link);
  }

  popCocteil():void {
    let link = [''];
    this.router.navigate(link);
  }

}