class perrito {
    constructor(nombre,edad,raza) {
        this.nombre=nombre;
        this.edad=edad;
        this.raza=raza;
        this.energia= 100;
        this.vida = 100;
    }


saltar() {
    if(this.energia < 20) 
    {
        this.vida= this.vida -15;
        alert(`El pana ${this.nombre} tiene ahora ${this.vida} de vida, !TEN CUIDADO O MORIRA¡`)
        alert (
        `El pana ${this.nombre} esta muy cansado para saltar :(, debes alimentarlo)`     
    );
    
    return;
    }
   
    this.energia = this.energia - 5;
    console.log(`El pana ${this.nombre} acaba de saltar`);
    console.log(
      `El pana ${this.nombre} tiene ahora ${this.energia} luego de saltar.`
    );
  }


correr() {
    if(this.energia < 20) {
        this.vida= this.vida -10;
        console.log(`El pana ${this.nombre} tiene ahora ${this.vida} de vida, !TEN CUIDADO O MORIRA¡`);
        alert (
        `El pana ${this.nombre} esta muy cansado para correr :(, debes alimentarlo)`     
    );
    
    return;
}
    this.energia=this.energia - 20;
    console.log(`El pana ${this.nombre} acaba de correr`);
    console.log(
        `El pana ${this.nombre} tiene ahora ${this.energia} puntos despues de correr `);
}
alimentar(alimento) {
    if(this.energia + alimento.calorias > 100) {
        alert ("Ups, el perrito no puede comer mas, esta lleno");
        return
    }
    this.energia = this.energia + alimento.calorias;
    console.log(
        `El pana ${this.nombre}, tiene ${this.energia} puntos de energia luego de comer ${alimento.nombre}.`
    );
    if(this.vida < 100)
    this.vida = this.vida + alimento.calorias;
    console.log(
        `El pana ${this.nombre} tiene ahora ${this.vida} de vida (ALIMENTALO PARA QUE SUBA SU VIDA)`
    )
    return;
}


}




class comida {
    constructor(nombre,calorias){
        this.nombre = nombre;
        this.calorias = calorias;
    }
}

let perritouno = new perrito("2pac",2,"Criollo");
let perritodos = new perrito("Mailo",1,"criollo")
let perritotres = new perrito("Francisco",3,"Franciscano")

let purina = new comida ("Purina", 20);
let helado = new comida ("Helado", 10)
console.log(perritouno);
console.log(purina);
console.log(helado);