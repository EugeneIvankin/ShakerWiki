import {Component, Input, OnInit} from '@angular/core';
import { AllCocteils } from '../../allCocteils';
import {CocteilService} from "../services/cocteil.servece";



@Component({
  moduleId: module.id,
  selector: 'cocteil-dashboard',
  templateUrl: 'cocteil-dashboard.component.html',
  styleUrls: ['cocteil-dashboard.component.css']
})


export class CocteilDashboard implements OnInit{

  allCocteils: AllCocteils;
  showCocteils = [];
  numbers = [];
  paigeOfCocteils: number;
  constructor(private cocteilService: CocteilService) {}

  ngOnInit(): void {
    this.cocteilService.allCocteil()
      .subscribe((res) => {this.allCocteils = res; this.getNumbers(res.length/6); this.getShowCocteils(1)});
  }

  getShowCocteils(num: number): void {
    this.paigeOfCocteils = num;
    if (this.showCocteils.length !==0 ){
      for (var i=0; i<6; i++){
        this.showCocteils.pop();
      }
      for(var i=(num-1)*6; i<num*6; i++){
        this.showCocteils.push(this.allCocteils[i]);
      }
    }
    else {
      for(var i=(num-1)*6; i<num*6; i++){
        this.showCocteils.push(this.allCocteils[i]);
      }
    }
  }

  getNumbers(n: number){
    for (var i=1; i<=n; i++){
      this.numbers.push(i);
    }
  }

}
