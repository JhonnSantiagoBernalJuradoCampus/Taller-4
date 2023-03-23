let menu = `----MENU-----
1.  Lectura de datos
2.  Crear Objeto
3.  Mostrar Objeto
4.  Crear Array
5.  Mostrar Array
6.  Elimine primer elemento del Array
7.  Elimine ultimo elemento del Array
8.  Eliminar cualquier elemento del Array
9.  Agregar elemento al comienzo del Array
10. Agregar elemento al final del Array
11. Crear array con objetos
12. Iterar array con obetos con FOR
13. Iterar array con objetos con ForEach
14. Iterar array con objetos con Map y crear copia
15. Mostrar array con objetos
0.  Salir`
let opcion = Number(prompt(`${menu}`));
let objeto;
let array;
let arrayObjetos;

function crearObjeto() {
    if(objeto == undefined) {
        objeto = {
            name: "Santiago",
            city: "Bucaramanga"
        };
        return objeto;
    }
    else{
        return objeto;
    }
}

function mostrarObjeto() {
    if (objeto != undefined){
        console.log(crearObjeto());
    }
    else {
        console.log("El objeto no se ha creado");
    }
}

function crearArray() {
    if(array == undefined) {
        array = [20,50,80,110,140,170,200];
        return array;
    }
    else {
        return array;
    }
}

function mostrarArray() {
    if(array != undefined) {
        console.log(crearArray());
    }
    else {
        console.log("El array no se ha creado");
    }
}

function deleteFirstElementArray() {
    if(array != undefined) {
        crearArray().shift();
    }
    else {
        console.log("El array no se ha creado");
    }
}

function deleteLastElementArray() {
    if(array != undefined) {
        crearArray().pop();
    }
    else {
        console.log("El array no se ha creado");
    }
}

function deleteAnyElementArray() {
    if(array != undefined) {
        let indice = crearArray().indexOf(Number(prompt(`Que elemento desea eliminar de estos: ${crearArray()}`)));
        if (indice != -1) {
            crearArray().splice(indice, 1);
        }
        else {
            console.log("El dato que ingresó no se encuentra en el array");
        }
    }
    else {
        console.log("El array no se ha creado");
    }
}

function addFirstElement() {
    if(array != undefined) {
        crearArray().unshift(Number(prompt(`Ingrese el numero que desea agregar de primero a el array: ${crearArray()}`)));
    }
    else {
        console.log("El array no se ha creado");
    }
}

function addLastElement() {
    if(array != undefined) {
        crearArray().push(Number(prompt(`Ingrese el numero que desea agregar de ultimo a el array: ${crearArray()}`)));
    }
    else {
        console.log("El array no se ha creado");
    }
}

function crearArrayObjetos() {
    if(arrayObjetos == undefined){
        arrayObjetos = [
            {
                name: "Dayana",
                age: 19
            },
            {
                name: "Tomas",
                age: 15
            },
            {
                name: "Alejandro",
                age: 22
            },
        ];
        return arrayObjetos;
    }
    else{
        return arrayObjetos;
    }
}

function iterarArrayFor() {
    if(arrayObjetos != undefined) {
        console.log("Objeto iterado con for");
        for (let i = 0; i < crearArrayObjetos().length; i++) {
            console.log(crearArrayObjetos()[i]);
        }
    }
    else {
        console.log("El array con objetos no se ha creado");
    }
}

function iterarArrayForEach() {
    if(arrayObjetos != undefined) {
        console.log("Objeto iterado con forEach");
        crearArrayObjetos().forEach((val, id) => {
            console.log(crearArrayObjetos()[id]);
        });
    }
    else {
        console.log("El array con objetos no se ha creado");
    }
}

function mostrarArrayObjetos() {
    if (arrayObjetos != undefined) {
        console.table((arrayObjetos));
    }
    else {
        console.log("El array con objetos no se ha creado");
    }
}

do {
    if (opcion == 2) {
        crearObjeto();
        opcion = Number(prompt(`${menu}`))
    }
    else if (opcion == 3) {
        mostrarObjeto();
        opcion = Number(prompt(`${menu}`))
    }
    else if (opcion == 4) {
        crearArray();
        opcion = Number(prompt(`${menu}`))
    }
    else if (opcion == 5) {
        mostrarArray();
        opcion = Number(prompt(`${menu}`))
    }
    else if (opcion == 6) {
        deleteFirstElementArray();
        opcion = Number(prompt(`${menu}`))
    }
    else if (opcion == 7) {
        deleteLastElementArray();
        opcion = Number(prompt(`${menu}`))
    }
    else if (opcion == 8) {
        deleteAnyElementArray();
        opcion = Number(prompt(`${menu}`))
    }
    else if (opcion == 9) {
        addFirstElement();
        opcion = Number(prompt(`${menu}`))
    }
    else if (opcion == 10) {
        addLastElement();
        opcion = Number(prompt(`${menu}`))
    }
    else if(opcion == 11) {
        crearArrayObjetos();
        opcion = Number(prompt(`${menu}`))
    }
    else if(opcion == 12) {
        iterarArrayFor();
        opcion = Number(prompt(`${menu}`))
    }
    else if(opcion == 13) {
        iterarArrayForEach();
        opcion = Number(prompt(`${menu}`))
    }
    else if(opcion == 15) {
        mostrarArrayObjetos();
        opcion = Number(prompt(`${menu}`))
    }
    else {
        opcion = 0
    }
} while (opcion != 0)