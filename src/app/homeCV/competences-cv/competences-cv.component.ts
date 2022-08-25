import { Component, OnInit } from '@angular/core';
import {UserCV} from "../class/userCV";
import {ICompetences} from "../interface/ICompetences";

@Component({
  selector: 'app-competences-cv',
  templateUrl: './competences-cv.component.html',
  styleUrls: ['./competences-cv.component.scss']
})
export class CompetencesCVComponent implements OnInit {

  private _usercv = new UserCV()

  constructor() { }

  ngOnInit(): void {
  }


  get usercv(): UserCV {
    return this._usercv;
  }

  set usercv(value: UserCV) {
    this._usercv = value;
  }

  get userCompetences(): Array<string>{
    return this._usercv.competences[0].competences;
  }
}
