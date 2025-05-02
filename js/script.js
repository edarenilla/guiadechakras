const bloques = document.querySelectorAll('.bloque');
const titulares = document.querySelectorAll('.titular');
const enlace = document.querySelector('.enlace');
const definicion = document.querySelector ('.definicion');
const volver = document.querySelector ('.volver');
const acordeon = document.querySelector('.acordeon');



titulares.forEach((titular, index) => {
    titular.addEventListener('click', function () {
        // Verifica si el bloque correspondiente ya tiene la clase "activo"
        if (bloques[index].classList.contains('activo')) {
            // Si ya está activo, lo cerramos eliminando la clase
            bloques[index].classList.remove('activo');
        } else {
            // Si no está activo, primero cerramos todos los bloques
            bloques.forEach(bloque => bloque.classList.remove('activo'));
            // Luego, abrimos el bloque correspondiente
            bloques[index].classList.add('activo');
        }
    });
});



titulares.forEach((titular) => {
    titular.addEventListener('click', function () {
        // Alterna la clase "activo" en el titular
        titular.classList.toggle('activo');
    });
});

//-------------------------------------------
//abrir y cerrar la ventana que es un chacra

enlace.addEventListener('click', ()  => {
    definicion.classList.remove('nomostrar');
    definicion.classList.add('mostrar');
    acordeon.classList.add('nomostrar')
    
})

volver.addEventListener ('click', ()=>{
    definicion.classList.remove('mostrar');
    definicion.classList.add('nomostrar');
    acordeon.classList.add('mostrar')
})