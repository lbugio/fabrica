import { Component, OnInit, Inject } from '@angular/core';
import {AvioService} from '../../../../../services/avio.service';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {NgForm, FormGroup, FormBuilder} from '@angular/forms';
import { Avio } from 'src/app/models/avio';


@Component({
  selector: 'app-formulario-avio',
  templateUrl: './formulario-avio.component.html',
  styleUrls: ['./formulario-avio.component.css'],
  providers: [AvioService]
  
})

export class FormularioAvioComponent implements OnInit {

  

  constructor(public dialogRef: MatDialogRef<FormularioAvioComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    public avioService: AvioService,
    
   ) {}
    
    ngOnInit() {
      
      this.avioService.getAvios();
      
        ;


  }

  addAvio(form: NgForm){
    if(form.value._id){
      this.avioService.putAvio(form.value)
      .subscribe(res=>{
        console.log(res);
      })
      
    } else{this.avioService.postAvio(form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.getAvios();
      })
   console.log(form.value);
}

    
  }

  getAvios() {
    this.avioService.getAvios()
        .subscribe(res=> {
          this.avioService.avios = res as Avio[];
          console.log(res);
        });
  }

 

  deleteAvio(_id: string) {
    
        if(confirm('Eliminar?')){
          this.avioService.deleteAvio(_id)
          .subscribe(res => {
            this.getAvios();
        });
      }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.avioService.selectedAvio = new Avio();
    }
  }
  
}
