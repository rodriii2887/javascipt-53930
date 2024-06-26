$(document).ready(function() {
    const listaTareas = $(".lista-tareas");
    const inputNuevaTarea = $(".nueva-tarea");
    const btnAgregar = $(".agregar-btn");

    // Cargar tareas
    cargarTareas();

    // Agregar evento
    btnAgregar.click(function() {
        agregarTarea(inputNuevaTarea.val());
    });

    inputNuevaTarea.keypress(function(event) {
        if (event.key === "Enter") {
            agregarTarea(inputNuevaTarea.val());
        }
    });

    //agregar una nueva tarea a la lista
    function agregarTarea(tareaTexto) {
        if (tareaTexto.trim() !== "") {
            const nuevaTarea = $("<li>").text(tareaTexto).addClass("tarea");

            //marcar como completada al hacer clic
            nuevaTarea.click(function() {
                $(this).toggleClass("completada");
                guardarTareas();
            });

            // botón para eliminar la tarea
            const btnEliminar = $("<span>").text("❌").addClass("eliminar-tarea").click(function(event) {
                event.stopPropagation();
                $(this).parent().remove();
                guardarTareas();
            });

            nuevaTarea.append(btnEliminar);
            listaTareas.append(nuevaTarea);
            guardarTareas();
            inputNuevaTarea.val("");
        }
    }

    // cargar las tareas desde una API externa
    function cargarTareas() {
        $.getJSON("https://jsonplaceholder.typicode.com/todos", function(data) {
            $.each(data, function(index, tarea) {
                if (index < 10) {
                    agregarTarea(tarea.title);
                    if (tarea.completed) {
                        listaTareas.children().last().addClass("completada");
                    }
                } else {
                    return false;
                }
            });
        });
    }

    // guardar las tareas en el servidor
    function guardarTareas() {
        console.log("Tareas guardadas en el servidor (simulación)");
    }
});


