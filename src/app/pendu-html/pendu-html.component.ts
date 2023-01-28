import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {stringify} from "@angular/compiler/src/util";
declare var pendu: any;

@Component({
  selector: 'app-pendu-html',
  templateUrl: './pendu-html.component.html',
  styleUrls: ['./pendu-html.component.scss'],
  encapsulation: ViewEncapsulation.None

})
export class PenduHtmlComponent implements OnInit {

  constructor() {


  }

  ngOnInit(): void {

    new pendu();

  }

}

