import { Component, OnInit } from '@angular/core';
import {AvioService} from '../../../../services/avio.service';
import { Avio } from 'src/app/models/avio';
import {MatDialog} from "@angular/material";
import { FormularioAvioComponent } from './formulario-avio/formulario-avio.component';




@Component({
  selector: 'app-avios',
  templateUrl: './avios.component.html',
  styleUrls: ['./avios.component.css'],
  providers: [AvioService]
})
export class AviosComponent implements OnInit {


  

  constructor(private avioService: AvioService,
    public dialog: MatDialog) {
    
   }

  ngOnInit() {
    this.getAvios();
  }

  getAvios() {
    this.avioService.getAvios()
        .subscribe(res=> {
          this.avioService.avios = res as Avio[];
          console.log(res);
        });
  }

  editAvio(avio: Avio) {
    const dialogRef = this.dialog.open(FormularioAvioComponent, { data: avio

    });

    this.avioService.selectedAvio = avio;

  }

  deleteAvio(_id: string) {
    
        if(confirm('Eliminar?')){
          this.avioService.deleteAvio(_id)
          .subscribe(res => {
            this.getAvios();
        });
      }
  }

  //formulario ingreso

  openDialog(avio?) {

    const dialogRef = this.dialog.open(FormularioAvioComponent, {
      
      data: {}})

    
    ;

    dialogRef.afterClosed().subscribe(res => {
      
    this.getAvios();
    
    });


    
  }

  
}
