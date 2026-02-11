function navegar(idVista) {

    const vistas = document.querySelectorAll('.vista');
    vistas.forEach(vista => {
        vista.classList.remove('active');
    });



    const vistaAmostrar = document.getElementById('vista-' + idVista);
    if (vistaAmostrar) {
        vistaAmostrar.classList.add('active');
    }


    const links = document.querySelectorAll('.nav-link');
    links.forEach(link => {
        link.classList.remove('active');

        const vistaName = link.getAttribute('onclick').match(/'([^']+)'/)[1];
        if(vistaName === idVista) {
            link.classList.add('active');
        }
    });


    window.scrollTo({ top: 0, behavior: 'smooth' });
}
document.querySelectorAll('.acordeon-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        item.classList.toggle('active');
    });
});

function buscarEnTabla() {
    var input = document.getElementById("inputBuscador");
    var filtro = input.value.toUpperCase();
    var tabla = document.getElementById("tablaDiccionario");
    var filas = tabla.getElementsByTagName("tr");

    for (var i = 1; i < filas.length; i++) {
        var celdaNombreOriginal = filas[i].getElementsByTagName("td")[0]; 
        var celdaNombre = filas[i].getElementsByTagName("td")[1];         

        if (celdaNombreOriginal && celdaNombre) {
            var texto1 = celdaNombreOriginal.textContent || celdaNombreOriginal.innerText;
            var texto2 = celdaNombre.textContent || celdaNombre.innerText;

            if (texto1.toUpperCase().indexOf(filtro) > -1 || texto2.toUpperCase().indexOf(filtro) > -1) {
                filas[i].style.display = "";
            } else {
                filas[i].style.display = "none";
            }
        }
    }
}

function cerrarModal() {
    var modal = document.getElementById("modal-advertencia");
    modal.style.display = "none";
}