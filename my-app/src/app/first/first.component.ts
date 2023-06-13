import { Component, OnDestroy, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css'],
})

export class FirstComponent implements OnInit {

  items:any[]=[];



  constructor(private firstService: MyserviceService) {}

  ngOnInit() {
   this.items=this.firstService.persons;
  }
}
