const li = document.querySelectorAll('.tabs-li');
const bloque = document.querySelectorAll('.tabs-cont');

// Recorrer todos los li y asignarles un evento de clic
li.forEach((cadaLi, i) => {
    cadaLi.addEventListener('click', () => {
        // Primero quitar la clase 'activo' de todos los li y bloques
        li.forEach((el) => el.classList.remove('activo'));
        bloque.forEach((el) => el.classList.remove('activo'));

        // Añadir la clase 'activo' al li y bloque correspondiente
        cadaLi.classList.add('activo');
        bloque[i].classList.add('activo');
    });
});
