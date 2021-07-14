function mostrarOcultarDetalleDepartamento(element) {
    // este proceso es casi igual a seleccionar departamento
    // pero con el detalle de cade departamento para
    // mostrarlo y desaparecerlo
    const idDetalleDepartamento = "detalles-" + element.id;

    const yaSeleccionado = document.getElementsByClassName(
        "container-mapa-info");
    if (yaSeleccionado.length > 0) {
        yaSeleccionado[0].classList.add("container-mapa-info-oculto")
        yaSeleccionado[0].classList.remove("container-mapa-info");
    }
    const detalleDepartamento = document.getElementById(idDetalleDepartamento);
    if (!detalleDepartamento) {return}
    detalleDepartamento.classList.add("container-mapa-info");
    detalleDepartamento.classList.remove("container-mapa-info-oculto");
}

function seleccionarDepartamento(element) {
    // Se busca por clase si existe la case "click-departamento"
    // si existe se elimina y se agrega la clase "departamento-estandar"
    // despues al elemnto Departamento se le remueve su clase actual y
    // se agrega la case "click-departamento" asi garantizamos
    // que solo un elemento tenga la clase "click-departamento".
    const yaSeleccionado = document.getElementsByClassName(
        "departamento-seleccionado");
    if (yaSeleccionado.length > 0) {
        yaSeleccionado[0].classList.add("color-departamento-estandar")
        yaSeleccionado[0].classList.remove("departamento-seleccionado");
    }
    mostrarOcultarDetalleDepartamento(element);
    element.classList.add("departamento-seleccionado");
    element.classList.remove("color-departamento-estandar");
}