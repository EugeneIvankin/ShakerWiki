import {Component, Input, OnInit} from '@angular/core';
import { AllCocteils } from '../allCocteils';
import {CocteilService} from "./services/cocteil.servece";



@Component({
  moduleId: module.id,
  selector: 'cocteil-dashboard',
  templateUrl: './cocteil-dashboard.component.html',
  styleUrls: ['./cocteil-dashboard.component.css']
})


export class CocteilDashboard implements OnInit{

  allCocteils: AllCocteils;

  constructor(private cocteilService: CocteilService) {}

  ngOnInit(): void {
    this.cocteilService.allCocteil()
      .subscribe((res) => this.allCocteils = res);
  }

}
