import { Component, Input, OnInit } from '@angular/core';
import { Drugstore } from 'src/app/pharmacie/domain/entities/Drugstore';

@Component({
  selector: 'app-drugstore-list-item',
  templateUrl: './drugstore-list-item.component.html',
  styleUrls: ['./drugstore-list-item.component.scss'],
})
export class DrugstoreListItemComponent implements OnInit {

  @Input()
  drugstore: Drugstore;
  
  constructor() { }

  ngOnInit() {}

}
