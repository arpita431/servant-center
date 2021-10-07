import { Component, OnInit } from '@angular/core';
import { ConsentService } from '../../consent.service';

@Component({
  selector: 'app-consent-data',
  templateUrl: './consent-data.component.html',
  styleUrls: ['./consent-data.component.scss'],
})
export class ConsentDataComponent implements OnInit {
  display: boolean = false;
  vetran: any;

  constructor(private service: ConsentService) {}

  ngOnInit(): void {
    this.display = true;
    this.getVetranDetailsById();
  }

  showConsentForm() {
    this.display = true;
  }

  getVetranDetailsById() {
    let resp = this.service.getRegisterUserDetailsById();
    resp.subscribe((data) => {
      this.vetran = data;
    });
  }
}
