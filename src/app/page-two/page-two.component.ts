import {Component, OnInit} from '@angular/core';
import {CustomData} from '../custom-data.class';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.scss']
})
export class PageTwoComponent implements OnInit {
  customData: CustomData;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.customData = this.route.snapshot.data['customData'] as CustomData;

    if (this.customData.skipPage === true) {
      this.router.navigate(['data-test/page-three']);
    }

    console.log(this.customData);
  }

  saveAndContinue() {
    this.router.navigate(['data-test/page-three']);
  }

  navBack() {
    this.router.navigate(['data-test/page-one']);
  }


}
