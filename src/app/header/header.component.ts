import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  title = 'Kamanchi';
  description = 'Tu asistente de ayuda para entrevistas Dev';

  constructor() { }

  ngOnInit() {
  }

}
