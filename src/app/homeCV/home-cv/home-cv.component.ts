import { Component, OnInit } from '@angular/core';
import {UserCV} from "../class/userCV";

@Component({
  selector: 'app-home-cv',
  templateUrl: './home-cv.component.html',
  styleUrls: ['./home-cv.component.scss']
})
export class HomeCVComponent implements OnInit {

  private _usercv = new UserCV()

  constructor() { }

  ngOnInit(): void {
    console.log(this.usercv.age)
  }


  get usercv(): UserCV {
    return this._usercv;
  }

  set usercv(value: UserCV) {
    this._usercv = value;
  }
}
