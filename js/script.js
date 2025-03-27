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

let count = localStorage.getItem('count'); // to get the count from the local storage
count = parseInt(count); // to convert the string to a number since the local storage stores the data as a string
if (isNaN(count)) count = 0; // to check if the value is not a number, it will take 0 as default

function updateCount() {
    count ++;
    visitCount.textContent = count; // to update the count in the DOM; i can also use innerText
    localStorage.setItem('count', count); // to save the count in the local storage
}

function resetCount() {
    count = 0;
    visitCount.textContent = count;
    localStorage.clear('count', count);
}

resetBtn.addEventListener('click', resetCount);
window.addEventListener('load', updateCount); //window is the global object in the browser, it is the same as document, but document is more specific to the DOM, window is more general to the browser

// load is an event that is fired when the page is loaded, so when the page is loaded, the updateCount function will be called and the count will be updated.

/*
i can also use the arrow function for the resetCount function like this:
    resetBtm.addEventListener('click', () => {
        count = 0;
        visitCount.textContent = count;
        localStorage.clear('count', count);
    }
    )
*/

/*
JSON.stringify() // with this method we send to localStorage a chain of text
JSON.parse() //the data that comes from localStorage, we parsify it with a readable JSON by JS
*/



const save = document.getElementById('btnSave');
const read = document.getElementById('btnRead');
const userList = document.getElementById('userList');

const users = [
    {name: 'Liza', age: 22},
    {name: 'Data', age: 47},
    {name: 'Victor', age: 21},
    {name: 'Alina', age: 25}
]

save.addEventListener('click', () => {
    localStorage.setItem('users', JSON.stringify(users))
});

read.addEventListener('click', () => {
    const userLocal = localStorage.getItem('users')
    const jsonUsers = JSON.parse(userLocal)
    if(!jsonUsers) {
        userList.innerHTML = "No users. Click on save."
    } else {
        userList.innerHTML = ""
        jsonUsers.forEach(user => {
            const {name, age} = user
            userList.innerHTML += `
            <h2>Name: ${name}</h2>
            <p>Age: ${age}</p>
            `
        }); 
        }   
})


/*

const btnGuardar = document.getElementById("btnGuardar")
const btnLeer = document.getElementById("btnLeer")
const listaUsuarios = document.getElementById("listaUsuarios")
// JSON.stringify() // -> Con este método lo que conseguimos es pasar al localStorage una cadena de texto 
// JSON.parse() // -> El dato que viene del local Storage lo vamos a parsear a un Json legible por JS

const usuarios = [
  {name: "Celia", age: 27},
  {name: "Data", age: 28},
  {name: "Carlos", age: 42}
]

btnGuardar.addEventListener("click", () => {
  localStorage.setItem("users", JSON.stringify(usuarios))
})

btnLeer.addEventListener("click", () => {
  const usuariosLocal = localStorage.getItem("users") 
  const jsonUsuarios = JSON.parse(usuariosLocal)
  if(!jsonUsuarios) {
    listaUsuarios.innerHTML = "No hay usuarios. dale a guardar"
  } else {
    listaUsuarios.innerHTML = ""
    jsonUsuarios.forEach(usuario => {
      const { name, age} = usuario
      listaUsuarios.innerHTML += `
      <h2>Nombre: ${name}</h2>
      <p>Edad: ${age}</p>
      `  
    }); 
  }

})

*/
