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
        if (!bloque1[i].classList.contains('activo')) {
            bloque1.forEach(cadaBloque => {
                cadaBloque.classList.remove('activo');
            });

            bloque1[i].classList.add('activo');
        } else {
            bloque1[i].classList.remove('activo');

        }


    });
});

const gallery = document.querySelectorAll('.gallery img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = lightbox.querySelector('img');
const closeBtn = lightbox.querySelector('.close');

// Abrir lightbox al hacer clic en una imagen
gallery.forEach(img => {
  img.addEventListener('click', () => {
    const fullSizeImg = img.getAttribute('data-full');
    lightboxImg.src = fullSizeImg;
    lightbox.classList.add('active');
  });
});

// Cerrar lightbox
closeBtn.addEventListener('click', () => {
  lightbox.classList.remove('active');
  lightboxImg.src = '';
});

// Cerrar lightbox al hacer clic fuera de la imagen
lightbox.addEventListener('click', (e) => {
  if (e.target === lightbox) {
    lightbox.classList.remove('active');
    lightboxImg.src = '';
  }
});