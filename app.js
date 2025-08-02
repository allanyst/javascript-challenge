// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
const listaAmigos = document.getElementById("listaAmigos");
// let amigo='';
function agregarAmigo(){
    let nuevoAmigo = document.querySelector("#amigo").value;
    amigos.push(nuevoAmigo);
    limpiarCaja();
    const elementoLista = document.createElement("li");
    elementoLista.textContent = nuevoAmigo;
    listaAmigos.appendChild(elementoLista);
}
function sortearAmigo() {
    if (amigos.length < 3) {
        alert("Necesitas al menos 3 amigos para el sorteo.");
        return;
    }

    let amigosCopia = [...amigos]; // Crea una copia del array
    
    // Algoritmo de Fisher-Yates para barajar el array
    for (let i = amigosCopia.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigosCopia[i], amigosCopia[j]] = [amigosCopia[j], amigosCopia[i]];
    }

    let resultados = [];
    for (let i = 0; i < amigos.length; i++) {
        let amigoSecreto = amigosCopia[i];
        if (amigos[i] == amigoSecreto) {
            // Intercambia con el siguiente si se asigna a sí mismo
            if (i === amigos.length - 1) {
                // Si es el último, intercambia con el anterior
                [amigosCopia[i], amigosCopia[i - 1]] = [amigosCopia[i - 1], amigosCopia[i]];
            } else {
                // Intercambia con el siguiente
                [amigosCopia[i], amigosCopia[i + 1]] = [amigosCopia[i + 1], amigosCopia[i]];
            }
            amigoSecreto = amigosCopia[i];
        }
        resultados.push(`${amigos[i]} le regala a ${amigoSecreto}`);
    }

    // Muestra los resultados en la página
    mostrarResultados(resultados);
}

function mostrarResultados(resultados) {
    const listaResultados = document.getElementById("resultado");
    listaResultados.innerHTML = ""; // Limpia resultados anteriores

    resultados.forEach(resultado => {
        const elementoLista = document.createElement("li");
        elementoLista.textContent = resultado;
        listaResultados.appendChild(elementoLista);
    });
}
function limpiarCaja(){
    document.querySelector('#amigo').value='';
    return;
}