import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  tipoMenu() {
    let ok: boolean = false

    if (environment.token != "") {
      ok = true
    }

    return ok
  }

}
