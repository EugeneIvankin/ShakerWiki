import {Component, OnInit} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {CocteilService} from "./services/cocteil.servece";
import {Cocteil} from "../cocteil";
import {CocteilIngred} from "../cocteilIngred";




@Component({
  selector: 'popCocteil',
  templateUrl: './popCocteil.html',
  styleUrls: ['./popCocteil.css']
})

export class PopCocteilService implements OnInit{
  cocteil: Cocteil;
  cocteilIngred: CocteilIngred;
  name: any;

  constructor(
    private http: Http,
    private cocteilService: CocteilService,)
  {}

  ngOnInit(): void {
    this.cocteilService.popCocteil().then((res) => {
      this.name =res;
      this.cocteilService.searichCocteil(this.name)
        .subscribe((res) => this.cocteil=res);
      this.cocteilService.searichIndred(this.name)
        .subscribe((res) => this.cocteilIngred=res)
    }, (err) => {
      console.log(err);
    });
  }

  addLike():void {
    this.cocteilService.addLike(this.cocteil.name_of_cocteil)
      .subscribe((res) => {this.cocteil.like_of_cocteil +=1}, (err) => {console.log(err);})
  }
}
