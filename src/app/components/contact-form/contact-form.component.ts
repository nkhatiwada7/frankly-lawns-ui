import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, MinLengthValidator, Validators} from "@angular/forms";

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {

  contactInfo: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactInfo = this.fb.group({
      firstName: this.fb.control(null, [Validators.required]),
      lastName: this.fb.control(null, [Validators.required]),
      street: this.fb.control(null, [Validators.required]),
      street2: this.fb.control(null),
      city: this.fb.control(null, [Validators.required]),
      state: this.fb.control(null, [Validators.required]),
      zip: this.fb.control(null, [Validators.required]),
      phoneNumber: this.fb.control(null, [Validators.required, Validators.minLength(10)]),
      email: this.fb.control(null, [Validators.required, Validators.email])
    });
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    //TODO call AWS Lambda to store in NOSQL database
  }

}
