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
    element.classList.remove("color-departamento-estandar");
    element.classList.add("departamento-seleccionado");
}