import {Component, OnInit} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {CocteilService} from "../services/cocteil.servece";
import {Cocteil} from "../../cocteil";
import {CocteilIngred} from "../../cocteilIngred";
import {User} from "../../user";
import {stringDistance} from "codelyzer/util/utils";

@Component({
  selector: 'popCocteil',
  templateUrl: 'popCocteil.html',
  styleUrls: ['popCocteil.css']
})

export class PopCocteilService implements OnInit{
  cocteil: Cocteil;
  cocteilIngred: CocteilIngred;
  currentIdUser: number;
  usersCocteil = [];
  name: any;
  imageLake = true;
  imageLakeAdd = false;

  constructor(
    private cocteilService: CocteilService)
  {
    this.currentIdUser = JSON.parse(localStorage.getItem('currentUser'));
    this.usersCocteil = JSON.parse(localStorage.getItem('usersCocteil'));
  }

  ngOnInit(): void {
    this.cocteilService.popCocteil().then((res) => {
      this.name =res;
      this.cocteilService.searichCocteil(this.name)
        .subscribe((res) => {
          this.cocteil = res;
          if (this.usersCocteil !== null) {
            if (!this.searchCocteil()) {
              this.imageLake = false;
              this.imageLakeAdd = true;
            }
          }
        });
      this.cocteilService.searichIndred(this.name)
        .subscribe((res) => this.cocteilIngred=res)
    }, (err) => {
      console.log(err);
    });
  }

 searchCocteil (): boolean {
   let addLike = true;
     for (var i = 0; i < this.usersCocteil.length; i++) {
       if (this.cocteil.name_of_cocteil !== this.usersCocteil[i]) {
         addLike = true;
       }
       else {
         addLike = false;
         break;
       }
     }
     return addLike
 }



  addLike():void {
    if (this.currentIdUser !== null) {
      if (this.searchCocteil()) {
        this.imageLake = false;
        this.imageLakeAdd = true;
        this.usersCocteil.push(this.cocteil.name_of_cocteil);
        localStorage.setItem('usersCocteil', JSON.stringify(this.usersCocteil));
        this.usersCocteil = JSON.parse(localStorage.getItem('usersCocteil'));
        this.cocteilService.addLike(this.cocteil.name_of_cocteil, this.currentIdUser)
          .subscribe((res) => {
            this.cocteil.like_of_cocteil += 1
          }, (err) => {
            console.log(err);
          })
      }
    }
  }


}
