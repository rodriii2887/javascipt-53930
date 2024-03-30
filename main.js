document.addEventListener("DOMContentLoaded", function() {
    const listaTareas = document.querySelector(".lista-tareas");
    const inputNuevaTarea = document.querySelector(".nueva-tarea");
    const btnAgregar = document.querySelector(".agregar-btn");

    // Cargar tareas desde el almacenamiento local
    cargarTareas();

    btnAgregar.addEventListener("click", function() {
        agregarTarea();
    });

    inputNuevaTarea.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            agregarTarea();
        }
    });

    // Función para agregar una nueva tarea a la lista
    function agregarTarea() {
        const tareaTexto = inputNuevaTarea.value.trim();
        if (tareaTexto !== "") {
            const nuevaTarea = document.createElement("li");
            nuevaTarea.textContent = tareaTexto;
            nuevaTarea.classList.add("tarea");

            nuevaTarea.addEventListener("click", function() {
                nuevaTarea.classList.toggle("completada");
                guardarTareas();
            });

            //botón para eliminar la tarea
            const btnEliminar = document.createElement("span");
            btnEliminar.textContent = "❌";
            btnEliminar.classList.add("eliminar-tarea");
            btnEliminar.addEventListener("click", function(event) {
                event.stopPropagation();
                listaTareas.removeChild(nuevaTarea);
                guardarTareas();
            });

            nuevaTarea.appendChild(btnEliminar);
            listaTareas.appendChild(nuevaTarea);
            guardarTareas();
            inputNuevaTarea.value = "";
        }
    }

    //cargar las tareas desde el almacenamiento local
    function cargarTareas() {
        const tareas = JSON.parse(localStorage.getItem("tareas"));
        if (tareas) {
            tareas.forEach(tarea => {
                agregarTareaDesdeTexto(tarea.texto, tarea.completada);
            });
        }
    }

    //guardar las tareas en el almacenamiento local
    function guardarTareas() {
        const tareas = [];
        listaTareas.childNodes.forEach(tarea => {
            tareas.push({
                texto: tarea.textContent,
                completada: tarea.classList.contains("completada")
            });
        });
        localStorage.setItem("tareas", JSON.stringify(tareas));
    }

    function agregarTareaDesdeTexto(texto, completada) {
        const nuevaTarea = document.createElement("li");
        nuevaTarea.textContent = texto;
        nuevaTarea.classList.add("tarea");
        if (completada) {
            nuevaTarea.classList.add("completada");
        }

        nuevaTarea.addEventListener("click", function() {
            nuevaTarea.classList.toggle("completada");
            guardarTareas();
        });

        // botón para eliminar la tarea
        const btnEliminar = document.createElement("span");
        btnEliminar.textContent = "❌";
        btnEliminar.classList.add("eliminar-tarea");
        btnEliminar.addEventListener("click", function(event) {
            event.stopPropagation();
            listaTareas.removeChild(nuevaTarea);
            guardarTareas();
        });

        nuevaTarea.appendChild(btnEliminar);
        listaTareas.appendChild(nuevaTarea);
    }
});

