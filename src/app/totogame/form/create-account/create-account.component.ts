import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {AbstractControl, FormControl, FormGroup, Validators} from "@angular/forms";
import {HttpClientService} from "../../../../services/http-client.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
  createAccountFormGroup!: FormGroup;
  constructor(private router: Router, private httpService: HttpClientService, httpClient: HttpClient) {}


  ngOnInit(): void {
    this.createAccountFormGroup = new FormGroup({
      nickname: new FormControl('', [
        Validators.required,
        Validators.minLength(2)
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
      email: new FormControl('', [
        Validators.required,
        Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
      ])
    })
  }

  get name(): AbstractControl {
    return <AbstractControl> this.createAccountFormGroup.get('name');
  }

  get nickname(): AbstractControl {
    return <AbstractControl> this.createAccountFormGroup.get('nickname');
  }

  get mail(): AbstractControl {
    return <AbstractControl> this.createAccountFormGroup.get('email');
  }

  isFieldInvalid(field: string): boolean {
    let formControl: AbstractControl = <AbstractControl>this.createAccountFormGroup.get(field);
    return (formControl.dirty || formControl.touched) && formControl.invalid;
  }

  onSubmit(){
    if (this.createAccountFormGroup.valid){
      this.httpService.postRequest<object>("/account" , this.createAccountFormGroup.value).subscribe((json) => {
        })
      return true
    } else {
      return false
    }
  }

}
