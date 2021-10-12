import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { VeteranprofileService } from '../../services/veteranprofile.service';

interface State {
  name: string;
}

@Component({
  selector: 'app-veteran-profile',
  templateUrl: './veteran-profile.component.html',
  styleUrls: ['./veteran-profile.component.scss'],
})
export class VeteranProfileComponent implements OnInit {
  veteranProfileForm!: FormGroup;
  submitted : boolean = false;
  states: State[];
  selectedState!: State;
  veteran: any;
  name: any;
  selectedGender: any = null;
  selectedMartialStatus: any = null;
userName:any;
dob:any;
recordNo: any;
intakeDob: any;
caseManager: any;
veteranId: any;
firstName: any;
middleName: any;
lastName: any;
nickName: any;
pob: any;
emailId: any;
phoneNumber: any;
contactPersonFirstName: any;
contactPersonMiddleName: any;
contactPersonLastName: any;
address1: any;
address2: any;
country: any;
city: any;
state: any;
gender: any;
zipCode: any;
martialStatus: any;
ssnNumber: any;
hmisIdNo: any;
primaryLanguage: any;
relegiousPreferences: any;
hobbies: any;
contactPersonCity: any;
contactPersonState: any;
contactPersonZip: any;
contactPersonHouseNumber: any;
contactPersonRelationship: any;
race: any;

  public customPatterns = { '0': { pattern: new RegExp('\[a-zA-Z\]')} };
  genders: any[] = [{ name: 'Female', key: 'A' }, { name: 'Male', key: 'M' }];
  martialStatuses: any[] = [{ name: 'Single', key: 'S' }, { name: 'Married', key: 'M' }];

  constructor(private formBuilder: FormBuilder, private service: VeteranprofileService) {

    this.states = [
      {name: 'Alabama'},
      {name: 'Alaska'},
      {name: 'Arizona'},
      {name: 'Arkansas'},
      {name: 'California'},
      {name: 'Colorado'},
      {name: 'Connecticut'},
      {name: 'Delaware'},
      {name: 'Florida'},
      {name: 'Georgia'},
      {name: 'Hawaii'},
      {name: 'Idaho'},
      {name: 'Illinois'},
      {name: 'Indiana'},
      {name: 'Iowa'},
      {name: 'Kansas'},
      {name: 'Kentucky'},
      {name: 'Louisiana'},
      {name: 'Maine'},
      {name: 'Maryland'},
      {name: 'Massachusetts'},
      {name: 'Michigan'},
      {name: 'Mississippi'},
      {name: 'Missouri'},
      {name: 'Montana'},
      {name: 'Nebraska'},
      {name: 'Nevada'},
      {name: 'New Hampshire'},
      {name: 'New Jersey'},
      {name: 'New Mexico'},
      {name: 'New York'},
      {name: 'North Carolina'},
      {name: 'North Dakota'},
      {name: 'Ohio'},
      {name: 'Oklahoma'},
      {name: 'Oregon'},
      {name: 'Pennsylvania'},
      {name: 'Rhode Island'},
      {name: 'South Carolina'},
      {name: 'South Dakota'},
      {name: 'Tennessee'},
      {name: 'Texas'},
      {name: 'Utah'},
      {name: 'Vermont'},
      {name: 'Virginia'},
      {name: 'Washington'},
      {name: 'West Virginia'},
      {name: 'Wisconsin'},
      {name: 'Wyoming'},
    ];
  }

  ngOnInit(): void {
    
    console.log(this.name);
    this.selectedGender = this.genders[1];
    this.selectedMartialStatus = this.martialStatuses[1];
    let response = this.service.getVeteranProfileDetailsByRecordNumber();
    response.subscribe((data) => {
      this.veteran = data;
      this.recordNo = this.veteran.recordNo;
      this.userName = this.veteran.firstName;
      this.dob = this.veteran.dob;
      this.intakeDob = this.veteran.intakeDOB;
      this.intakeDob = this.veteran.intakeDOB;
      this.caseManager = this.veteran.caseManager;
      this.veteranId = this.veteran.veteranId;
      this.firstName = this.veteran.firstName;
      this.middleName = this.veteran.middleName;
      this.lastName = this.veteran.lastName;
      this.nickName = this.veteran.nickName;
      this.dob = this.veteran.dob;
      this.pob = this.veteran.pob;
      this.emailId = this.veteran.emailId;
      this.phoneNumber = this.veteran.phoneNumber;
      this.contactPersonFirstName = this.veteran.contactPersonFirstName;
      this.contactPersonMiddleName = this.veteran.contactPersonMiddleName;
      this.contactPersonLastName = this.veteran.contactPersonLastName;
      this.address1 = this.veteran.address1;
      this.address2 = this.veteran.address1;
      this.country = this.veteran.country;
      this.city = this.veteran.city;
      this.state = this.veteran.state;
      this.gender = this.veteran.gender;
      this.zipCode = this.veteran.zipCode;
      this.martialStatus = this.veteran.martialStatus;
      this.ssnNumber = this.veteran.ssnNumber;
      this.hmisIdNo = this.veteran.hmisIdNo;
      this.primaryLanguage = this.veteran.primaryLanguage;
      this.relegiousPreferences = this.veteran.relegiousPreferences;
      this.hobbies = this.veteran.hobbies;
      this.contactPersonCity = this.veteran.contactPersonCity;
      this.contactPersonState = this.veteran.contactPersonState;
      this.contactPersonZip = this.veteran.contactPersonZip;
      this.contactPersonHouseNumber = this.veteran.contactPersonHouseNumber;
      this.contactPersonRelationship = this.veteran.contactPersonRelationship;
      this.race = this.veteran.race;
      this.buildForm();
      console.log(this.veteranProfileForm.value);
    })

    console.log(response);
  }

  buildForm() {
    this.veteranProfileForm = this.formBuilder.group({
      recordNo: [this.recordNo],
      intakeDOB: [this.intakeDob],
      caseManager: [this.caseManager, Validators.required],
      country: [this.country, Validators.required],
      veteranId: [this.veteranId, Validators.required],
      firstName: [this.userName, [Validators.required, Validators.minLength(4),Validators.nullValidator]],
      middleName: [this.middleName],
      lastName: [this.lastName, [Validators.required, Validators.minLength(4)]],
      cfirstName: ['', Validators.required, Validators.minLength(4)],
      cmiddleName: [''],
      clastName: ['', Validators.required, Validators.minLength(4)],
      nickName: ['', Validators.required],
      veteranDiagnosis: ['', Validators.required],
      address1: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', Validators.required],
      selectedState: ['', Validators.required],
      selectedGender: ['', Validators.required],
      selectedMartialStatus: ['', Validators.required],
      zipCode: [null, Validators.required],
      DOB: [this.dob, Validators.required],
      POB: ['', Validators.required],
      SSNNumber: [''],
      hmisIdNo: ['', Validators.required],
      emailId: [null,Validators.required,Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')],
      veteranSupports: ['', Validators.required],
      phoneNumber: [''],
      primaryLanguage: ['', Validators.required],
      relegiousPreferences: ['', Validators.required],
      hobbies: ['', Validators.required],
      cStreet: ['', Validators.required],
      cCity: ['', Validators.required],
      cState: ['', Validators.required],
      cZip: [''],
      cHouseNumber: ['', Validators.required],
      race: ['', Validators.required],
      contactPersonRelationship: ['', Validators.required],
    });
  }

  get emailid() {
    return this.veteranProfileForm.get('emailId');
  }
  get getControl() {
    return this.veteranProfileForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // console.log(this.response);
    console.log(this.veteranProfileForm.value);
  }
}