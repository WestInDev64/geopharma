import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Drugstore } from 'src/app/pharmacie/domain/entities/Drugstore';
import { DrugstoreHandler } from 'src/app/pharmacie/usecases/drugstore.handle';

@Component({
  selector: 'app-drugstore-list',
  templateUrl: './drugstore-list.component.html',
  styleUrls: ['./drugstore-list.component.scss'],
})
export class DrugstoreListComponent implements OnInit {

  drugstoreList$: Observable<Array<Drugstore>> 

  constructor(@Inject('DrugstoreHandler') private drugstoreHandler: DrugstoreHandler) { }
  //constructor() { }

  ngOnInit() {
    this.drugstoreList$ = this.drugstoreHandler.all();
  }

}
