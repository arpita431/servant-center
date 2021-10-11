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
  states: State[];
  selectedState!: State;
  veteran: any;
  name: any;
  selectedGender: any = null;
  selectedMartialStatus: any = null;

  emailId!: string;

  genders: any[] = [{ name: 'Female', key: 'A' }, { name: 'Male', key: 'M' }];
  martialStatuses: any[] = [{ name: 'Single', key: 'S' }, { name: 'Married', key: 'M' }, { name: 'DIvorced', key: 'D' }, { name: 'Widowed', key: 'W' }];

  constructor(private formBuilder: FormBuilder, private service: VeteranprofileService) {

    this.states = [
      { name: 'New York' },
      { name: 'Rome' },
      { name: 'London' },
      { name: 'Istanbul' },
      { name: 'Paris' }
    ];
  }

  ngOnInit(): void {
    this.buildForm();
    console.log(this.name);
    this.selectedGender = this.genders[1];
    this.selectedMartialStatus = this.martialStatuses[1];
    let response = this.service.getVeteranProfileDetailsByRecordNumber();
    response.subscribe((data) =>
    { this.veteran = data
      console.log(this.veteran.lastName)
    })
  }

  buildForm() {
    this.veteranProfileForm = this.formBuilder.group({
      recordNo: [''],
      intakeDOB: [null],
      caseManager: [null, Validators.required],
      country: [null, Validators.required],
      veteranId: ['', Validators.required],
      firstName: ['', Validators.required, Validators.minLength(4)],
      middleName: [''],
      lastName: ['', Validators.required, Validators.minLength(4)],
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
      DOB: ['', Validators.required],
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
    console.log(this.veteranProfileForm.value);
  }
}
