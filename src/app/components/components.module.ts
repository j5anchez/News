import { ArticleComponent } from './article/article.component';
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {IonicModule} from '@ionic/angular';

import {ArticlesComponent} from './articles/articles.component';



@NgModule({
  declarations: [ArticleComponent, ArticlesComponent],
  imports: [CommonModule, IonicModule]
})
export class ComponentsModule {
}
