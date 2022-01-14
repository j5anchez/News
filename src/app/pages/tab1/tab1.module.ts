import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {IonicModule} from '@ionic/angular';

import {ExploreContainerComponentModule} from '../../explore-container/explore-container.module';
import {ComponentsModule} from './../../components/components.module';
import {Tab1PageRoutingModule} from './tab1-routing.module';
import {Tab1Page} from './tab1.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    ComponentsModule,
  ],
  declarations: [Tab1Page]
  // schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Tab1PageModule {
}
