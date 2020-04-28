import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  empresas: Array<any>;
  empresa: any;

  constructor(private service: AppService) {}

  ngOnInit() {
    this.empresa = {};

    this.service.listar()
      .subscribe(resposta => this.empresas = resposta);
  }

  criar(frm: FormGroup) {
    this.service.criar(this.empresa).subscribe(resposta => {
      this.empresas.push(resposta);

      frm.reset();
    });
  }
}
