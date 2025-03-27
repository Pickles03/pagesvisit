/* 

<section class="container">
    <div class="content">
    <h1>WELCOME</h1>
    <p>Esta página ha sido visitada <span id="contadorVisitas">0</span> veces.</p>
    <button id="btnReestablecer">Reestablecer Contador</button>
    </div>
  </section>

  */

// Abre el archivo `index.html` en tu navegador.
// Cada vez que se recarga la página debe añadir una visita más
// Debe persistir el número aunque se cierre el navegador
// Si deseas reiniciar el contador, haz clic en el botón "Reestablecer Contador" y se pondrá a cero y comenzará de nuevo en 1 en la siguiente visita.
// Toda la lógica tiene que estar en `script.js`

// 1. Seleccionar los elementos del DOM
// 2. Crear una variable para guardar el contador
// 3. Crear una función para actualizar el contador
// 4. Crear una función para reiniciar el contador
// 5. Escuchar los eventos necesarios

const visitCount = document.getElementById('contadorVisitas');
const resetBtn = document.getElementById('btnReestablecer');

let count = localStorage.getItem('count'); // || means if the first value is false, it will take the second value as default, meaning if there is no value in the local storage, it will take 0 as default
count = parseInt(count); // to convert the string to a number

if (isNaN(count)) count = 0; // to check if the value is not a number, it will take 0 as default
 
function updateCount() {
    count ++;
    visitCount.textContent = count; // to update the count in the DOM
    localStorage.setItem('count', count); // to save the count in the local storage
}

function resetCount() {
    count = 0;
    visitCount.textContent = count;
    localStorage.setItem('count', count);
}

resetBtn.addEventListener('click', resetCount);
window.addEventListener('load', updateCount);






