// Inicializamos array vacio
let listaDeTareas = [];

function agregarTarea(tarea, prioridad) {
    // objeto
    let nuevaTarea = {
        tarea: tarea,
        prioridad: prioridad,
        completada: false 
    };
    listaDeTareas.push(nuevaTarea);
    console.log("Tarea agregada con éxito.");
}

// mostramos lista
function mostrarListaDeTareas() {
    if (listaDeTareas.length === 0) {
        console.log("No hay tareas en la lista.");
    } else {
        console.log("------ Lista de Tareas ------");
        // Iteramos sobre cada tarea en el array y la mostramos
        listaDeTareas.forEach((tarea, index) => {
            console.log((index + 1) + ". Tarea: " + tarea.tarea + " - Prioridad: " + tarea.prioridad + " - Completada: " + (tarea.completada ? "Sí" : "No"));
        });
    }
}

function eliminarTareaCompleta() {
    let tareaParaEliminar = parseInt(prompt("Ingrese el número de la tarea completada que desea eliminar:"));
    if (isNaN(tareaParaEliminar) || tareaParaEliminar < 1 || tareaParaEliminar > listaDeTareas.length) {
        console.log("Número de tarea no válido.");
    } else {
        listaDeTareas.splice(tareaParaEliminar - 1, 1);
        console.log("Tarea eliminada con éxito.");
    }
}

// menu
function mostrarMenu() {
    console.log("------ Menú ------");
    console.log("1. Agregar tarea");
    console.log("2. Ver lista de tareas");
    console.log("3. Eliminar tarea completada");
    console.log("4. Salir");
}

// opciones
let opcion;
while (opcion !== "4") {
    mostrarMenu();
    opcion = prompt("Ingrese el número de la opción que desee:");

    switch (opcion) {
        case "1":
            let nuevaTarea = prompt("Ingrese la descripción de la tarea:");
            let prioridad = prompt("Ingrese la prioridad de la tarea:");
            agregarTarea(nuevaTarea, prioridad);
            break;
        case "2":
            mostrarListaDeTareas();
            break;
        case "3":
            eliminarTareaCompleta();
            break;
        case "4":
            console.log("Saliendo del programa. ¡Hasta luego!");
            break;
        default:
            console.log("Opción no válida. Por favor, ingrese una opción válida.");
            break;
    }
}