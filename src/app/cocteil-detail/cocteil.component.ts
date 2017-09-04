import {Component, Input, OnInit} from '@angular/core';
import {CocteilService} from '../services/cocteil.servece';
import { Cocteil } from '../../cocteil'
import {CocteilIngred} from "../../cocteilIngred";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Subscription} from "rxjs";
import {User} from "../../user";



@Component({
  moduleId: module.id,
  selector: 'cocteil-detail',
  templateUrl: 'cocteil.component.html',
  styleUrls: ['cocteil.component.css']
})
export class CocteilDetailComponent implements OnInit{

  cocteil: Cocteil;
  cocteilIngred: CocteilIngred;
  currentIdUser: number;
  usersCocteil = [];
  imageLake = true;
  imageLakeAdd = false;

  constructor(
    private cocteilService: CocteilService,
    private route: ActivatedRoute,
    private router: Router,
  )
  {
    this.currentIdUser = JSON.parse(localStorage.getItem('currentUser'));
    this.usersCocteil = JSON.parse(localStorage.getItem('usersCocteil'));
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.cocteilService.searichIdOfCocteil(params.get('name')))
      .subscribe(res =>{
        if (res[0] !== undefined) {
            this.route.paramMap
            .switchMap((params: ParamMap) => this.cocteilService.searichCocteil(res[0].idCocteil))
            .subscribe(res => {
              this.cocteil = res[0];
              if (this.usersCocteil !== null) {
                if (!this.searchCocteil()) {
                  this.imageLake = false;
                  this.imageLakeAdd = true;
                }
              }
            });
          this.route.paramMap
            .switchMap((params: ParamMap) => this.cocteilService.searichIndred(res[0].idCocteil))
            .subscribe(res => this.cocteilIngred = res);}
        else if (res[0] == undefined) {
          this.cocteilNotFaunded();
        }
      }
      ), err => this.cocteilNotFaunded();
  }

  cocteilNotFaunded():void {
    let link = ['/cocteilNotFaunded'];
    this.router.navigate(link);
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
        this.cocteilService.addLike(this.cocteil.idCocteil, this.currentIdUser)
          .subscribe((res) => {
            this.cocteil.like_of_cocteil += 1
          }, (err) => {
            console.log(err);
          })
      }
    }
  }

}
