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

const bloque1 = document.querySelectorAll('.bloque');
const h2 = document.querySelectorAll('.h2');

// Recorrer todos los h2
h2.forEach((cadaH2, i) => {
    // Asignar un evento de click a cada h2
    cadaH2.addEventListener('click', () => {
        // Eliminar la clase 'activo' de todos los bloques
        bloque1.forEach(cadaBloque => {
            cadaBloque.classList.remove('activo');
        });

        // Añadir la clase 'activo' al bloque correspondiente
        bloque1[i-1].classList.add('activo');
    });
});

