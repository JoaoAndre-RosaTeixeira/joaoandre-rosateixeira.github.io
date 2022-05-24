import { Component, OnInit } from '@angular/core';
import {Departement} from "../../../../models/geo-gouv/departement";
import {UrlApi} from "../../../../url_api/url_api";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  this.httpService.getRequest<Departement[]>(UrlApi.urlDepartmentsAll).subscribe(json => {
  this.departmentsArray = json;
});

  ngOnInit(): void {
  }

}
