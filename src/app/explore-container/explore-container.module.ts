import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExploreContainerComponent } from './explore-container.component';
import { DrugstoreModule } from '../pharmacie/adapters/primaries/drugstore/drugstore.module';
import { HeaderComponent } from './header/header.component';
import { FilterComponent } from './header/filter/filter.component';

@NgModule({
  imports: [ CommonModule, FormsModule, IonicModule, DrugstoreModule],
  declarations: [ExploreContainerComponent, HeaderComponent, FilterComponent],
  exports: [ExploreContainerComponent]
})
export class ExploreContainerComponentModule {}
