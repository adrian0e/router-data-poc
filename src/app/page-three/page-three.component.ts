import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomData} from '../custom-data.class';

@Component({
  selector: 'app-page-three',
  templateUrl: './page-three.component.html',
  styleUrls: ['./page-three.component.scss']
})
export class PageThreeComponent implements OnInit {

  customData: CustomData;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.customData = this.route.snapshot.data['customData'] as CustomData;

    console.log(this.customData);
  }

  navBack() {
    this.router.navigate(['data-test/page-one']);
  }

}
