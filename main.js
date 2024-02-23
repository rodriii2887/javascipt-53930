let tarea = "";
let contador = 0;
let salir = false;

while (!salir) {
    console.log("------ Menú ------");
    console.log("1. Agregar tarea");
    console.log("2. Ver lista de tareas");
    console.log("3. Salir");
    
    // Se pide al usuario que elija una opción

    let opcion = prompt("Ingrese el número de la opción que desee:");

    // Se procesa la opción elegida

    switch (opcion) {
        case "1":
            tarea = prompt("Ingrese una tarea:");
            contador++;
            console.log("Tarea agregada: " + tarea);
            break;
        case "2":
            if (contador === 0) {
                console.log("No hay tareas en la lista.");
            } else {
                console.log("------ Lista de Tareas ------");
                for (let i = 1; i <= contador; i++) {
                    console.log("Tarea " + i + ": " + tarea);
                }
            }
            break;
        case "3":
            console.log("Saliendo del programa. ¡Hasta la proxima!");
            salir = true; 
            break;
        default:
            console.log("Opción no válida. Por favor, ingrese una opción válida.");
            break;
    }
}