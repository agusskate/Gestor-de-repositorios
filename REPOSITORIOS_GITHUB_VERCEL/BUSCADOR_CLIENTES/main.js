$(document).ready(function () {
    let lista = [
        { id: 1, nombre: "Taller", descripcion: "Simulador de un taller", link: "https://github.com/agusskate/Taller" },
        { id: 2, nombre: "Lista de tareas", descripcion: "Mini app para crear tareas",link: "https://github.com/agusskate/Lista-de-tareas-con-jQuery"  },
        { id: 3, nombre: "Tres en raya", descripcion: "Juego sencillo de 3 en raya", link: "https://github.com/agusskate/Tres-en-raya" },
        { id: 4, nombre: "Buscador de clientes", descripcion: "Simulador para gestión",link: "https://github.com/agusskate/Buscador-de-clientes" },
        { id: 5, nombre: "Buscador mejorado", descripcion: "Simulador para gestión V.2",link: "https://github.com/agusskate/Buscador-clientes-versi-n-mejorada" }
    ];

    function filtrarLista(nombreUsuario) {
        // Limpia el contenedor de cartas antes de agregar nuevas cartas
        $(".contenedorCartas").empty();

        for (const persona of lista) {
            // Comprueba el texto ingresado con el nombre del usuario
            if (persona.nombre.toLowerCase().includes(nombreUsuario.toLowerCase())) {
                let nuevaCarta = `
                    <div class="carta" data-id="${persona.id}">
                        <div class="imagenNombre">
                            <div class="imagen"><img src="${persona.imagen || 'default.png'}" alt=""></div>
                            <div class="nombreYapellido">
                                <div class="nombre">${persona.nombre}</div>
                            </div>
                        </div>
                        <div class="descripcion">${persona.descripcion}</div>
                        <div class="ContenedorBotonBorrar"><button class="botonAbrir">Abrir</button></div>
                    </div>
                `;
                // Agrega la nueva carta al contenedor
                $(".contenedorCartas").append(nuevaCarta);
            }
        }
    }

    // Llama a filtrarLista con un string vacío para mostrar todas las cartas al cargar la página
    filtrarLista("");

    $(".contenedorCartas").on("click", ".botonAbrir", function () {
        let carta = $(this).closest('.carta');
        let idCarta = carta.data('id');

        // Encuentra el objeto correspondiente en la lista
        let persona = lista.find(persona => persona.id === idCarta);

        if (persona && persona.link) {
            // Redirige al enlace
            window.location.href = persona.link;
        } else {
            // Opción de manejo si no existe el link
            alert("Este elemento no tiene un enlace asociado.");
        }
    });
});
