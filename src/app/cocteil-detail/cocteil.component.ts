import {Component, Input, OnInit} from '@angular/core';
import {CocteilService} from '../services/cocteil.servece';
import { Cocteil } from '../../cocteil'
import {CocteilIngred} from "../../cocteilIngred";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import {Subscription} from "rxjs";





@Component({
  moduleId: module.id,
  selector: 'cocteil-detail',
  templateUrl: 'cocteil.component.html',
  styleUrls: ['cocteil.component.css']
})
export class CocteilDetailComponent implements OnInit{

  cocteil: Cocteil;
  cocteilIngred: CocteilIngred;
  private querySubscription: Subscription;
  private idUser: number;

  constructor(
    private cocteilService: CocteilService,
    private route: ActivatedRoute,
    private router: Router,
  )
  {}

  ngOnInit(): void {

    this.route.paramMap
      .switchMap((params: ParamMap) => this.cocteilService.searichCocteil(params.get('name')))
      .subscribe(res => this.cocteil = res, err => this.cocteilNotFaunded());

    this.route.paramMap
      .switchMap((params: ParamMap) => this.cocteilService.searichIndred(params.get('name')))
      .subscribe(res => this.cocteilIngred = res);

    this.querySubscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
        this.idUser = queryParam['id'];
      }
    );

  }

  cocteilNotFaunded():void {
    let link = ['/cocteilNotFaunded'];
    this.router.navigate(link);
  }

  checkUser():void {
    console.log(this.idUser);
    if (this.idUser != 0){
      this.addLike();
    }
  }

  addLike():void {
    this.cocteilService.addLike(this.cocteil.name_of_cocteil)
      .subscribe((res) => {this.cocteil.like_of_cocteil +=1}, (err) => {console.log(err);})
  }

}
