export class Tela {
    
    constructor (_id='', nombre = '', precio = 0 ){
        this._id = _id;
        this.nombre = nombre;
        this.precio = precio;

    }

    _id: string;
    nombre: String; 
    precio: Number;

}
