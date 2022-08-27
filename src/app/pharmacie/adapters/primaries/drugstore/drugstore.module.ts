import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { DrugstoreListComponent } from './drugstore-list/drugstore-list.component';
import { DrugstoreListItemComponent } from './drugstore-list/drugstore-list-item/drugstore-list-item.component';
import { Drugstore } from 'src/app/pharmacie/domain/entities/Drugstore';
import { DrugstoreBuilder } from 'src/app/pharmacie/usecases/drugstore.builder';
import { DrugstoreHandler } from 'src/app/pharmacie/usecases/drugstore.handle';
import { InMemoryDrugstoresPort } from '../../secondaries/inMemory/inMemoryDrugstores.port';



@NgModule({
  declarations: [DrugstoreListComponent, DrugstoreListItemComponent],
  imports: [
    CommonModule, FormsModule, IonicModule,
  ],
  exports: [
    DrugstoreListComponent
  ],
  providers: [
    {
      provide: 'DrugstoreHandler',
      useFactory: () => {
        const pharmacie1: Drugstore = new DrugstoreBuilder()
          .withId('PHARMAO1')
          .withName('Pharmacie Cypria')
          .withTel(596632225)
          .withAddress('40 bd Général de Gaulle')
          .withCity('Fort-de-France')
          .withZipCode(97200)
          .withUrl('http://www.pharmao.fr/annuaire/pharmacies/liste/france-d-outre-mer/martinique/fort-de-france/pharmacie-cypria_21658')
          .build();
        const pharmacie2: Drugstore = new DrugstoreBuilder()
          .withId('PHARMAO2')
          .withName('Pharmacie du Rond Point')
          .withTel(596632225)
          .withAddress('40 bd Général de Gaulle')
          .withCity('Fort-de-France')
          .withZipCode(97200)
          .withUrl('http://www.pharmao.fr/annuaire/pharmacies/liste/france-d-outre-mer/martinique/fort-de-france/pharmacie-cypria_21658')
          .build();
        return new DrugstoreHandler( new InMemoryDrugstoresPort([pharmacie1, pharmacie2]));
      }
    }
  ]
})
export class DrugstoreModule { }
