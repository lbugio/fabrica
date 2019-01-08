import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material';


export interface Articulo {
  name: string;
}

export interface Tela {
  name: string;
}


@Component({
  selector: 'app-orden-de-produccion',
  templateUrl: './orden-de-produccion.component.html',
  styleUrls: ['./orden-de-produccion.component.css']
})
export class OrdenDeProduccionComponent implements OnInit {

  
  
    


  //autocomplete linea
  myControl = new FormControl();
  options: string[] = ['Bebe', 'Niño', 'Adulto'];

  //chip articulo
  visible = true;
  selectable = true;
  removable = true;
  addOnBlur = true;
  readonly separatorKeysCodes: number[] = [ENTER, COMMA];
  articulos: Articulo[] = [];
  telas: Tela[] = [];

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.articulos.push({name: value.trim()});
      this.telas.push({name: value.trim()});

    }

    // Reset the input value
    if (input) {
      input.value = '';
    }
  }

  remove(articulo: Articulo): void {
    const index = this.articulos.indexOf(articulo);

    if (index >= 0) {
      this.articulos.splice(index, 1);
    }
  }

  

  constructor() { }

  myFunction() {
    window.print();
}

  ngOnInit() {
    
    
    
  }

  date = new FormControl(new Date());
  serializedDate = new FormControl((new Date()).toISOString());

  

}
