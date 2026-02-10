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