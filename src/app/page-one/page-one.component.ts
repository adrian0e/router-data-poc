import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CustomData} from '../custom-data.class';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.scss']
})
export class PageOneComponent implements OnInit {
  customData: CustomData;
  isChecked = false;

  constructor(private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.customData = this.route.snapshot.data['customData'] as CustomData;

    this.isChecked = this.route.snapshot.data['customData'].skipPage;

    console.log(this.customData);
  }

  saveAndContinue() {
    // this.route.snapshot.data['customData'] = Object.assign(this.customData);
    this.router.navigate(['data-test/page-two']);
  }

  checkboxEvent(event: boolean) {
    this.route.snapshot.data['customData'].skipPage = event;
  }

}
