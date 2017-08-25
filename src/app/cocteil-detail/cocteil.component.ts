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
  usersCocteil: string;
  imageLake = true;
  imageLakeAdd = false;

  constructor(
    private cocteilService: CocteilService,
    private route: ActivatedRoute,
    private router: Router,
  )
  {this.usersCocteil = JSON.parse(localStorage.getItem('usersCocteil'));
    if (this.usersCocteil !== null){
      this.imageLake = false;
      this.imageLakeAdd = true;
    }
  }

  ngOnInit(): void {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.cocteilService.searichCocteil(params.get('name')))
      .subscribe(res => this.cocteil = res, err => this.cocteilNotFaunded());

    this.route.paramMap
      .switchMap((params: ParamMap) => this.cocteilService.searichIndred(params.get('name')))
      .subscribe(res => this.cocteilIngred = res);

  }

  cocteilNotFaunded():void {
    let link = ['/cocteilNotFaunded'];
    this.router.navigate(link);
  }

  addLike():void {
    this.currentIdUser = JSON.parse(localStorage.getItem('currentUser'));
    this.usersCocteil = JSON.parse(localStorage.getItem('usersCocteil'));
    if(this.currentIdUser !== null && this.usersCocteil == null){
      this.imageLake = false;
      this.imageLakeAdd = true;
      localStorage.setItem('usersCocteil', JSON.stringify(this.cocteil.name_of_cocteil));
      this.cocteilService.addLike(this.cocteil.name_of_cocteil, this.currentIdUser)
        .subscribe((res) => {this.cocteil.like_of_cocteil +=1}, (err) => {console.log(err);})
    }
  }

}
