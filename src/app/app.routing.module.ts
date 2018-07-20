import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

import {PageOneComponent} from './page-one/page-one.component';
import {PageTwoComponent} from './page-two/page-two.component';
import {PageThreeComponent} from './page-three/page-three.component';

import {SimpleResolver} from './route-data-resolver/simple.resolver';
import {AppComponent} from './app.component';

const routes: Routes = [
  {
    path: '', component: AppComponent,
  },
  {
    path: 'data-test', resolve: {customData: SimpleResolver},
    children: [
      {
        path: 'page-one', component: PageOneComponent,
      },
      {
        path: 'page-two', component: PageTwoComponent,
      },
      {
        path: 'page-three', component: PageThreeComponent
      },
    ]

  },
  {
    path: '**', redirectTo: ''
  }

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [SimpleResolver]
})
export class AppRoutingModule {
}
