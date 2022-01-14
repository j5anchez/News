import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';

import {Article} from '../interfaces/index';

import {ArticleComponent} from './article/article.component';
import {ArticlesComponent} from './articles/articles.component';



@NgModule({
  declarations: [ArticleComponent, ArticlesComponent,],
  imports: [CommonModule, IonicModule],
  exports: [ArticlesComponent,]

})
export class ComponentsModule {
}
