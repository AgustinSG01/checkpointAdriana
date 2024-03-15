/*const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

 function Impares(arrayImpares){
    let sumaImpares=0
    for(let i=0; i<arrayImpares.length; i++){
        if(arrayImpares [i] %2 !=0){
            
                sumaImpares += arrayImpares[i]
            
        }
       
    }
    return sumaImpares;
 } 

 console.log(Impares(numeros));*/

 const people= [
    { name: 'Mario', age: 32 },
    { name: 'Luigi', age: 28 },
    { name: 'Peach', age: 29 },
    { name: 'Toad', age: 35 }
  ];

function Objetos(arrayObjetos){
    let mayor = arrayObjetos[0];
   for(let i=0; i<arrayObjetos.length; i++){
    if( mayor.age<arrayObjetos[i].age){
        mayor=arrayObjetos[i]
    }
   }
   return mayor
}

console.log(Objetos(people))