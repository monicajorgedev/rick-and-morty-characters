const lista = document.getElementById("character-list")
let page = 1
const prevPag = document.getElementById("prev-page")
const nextPag = document.getElementById("next-page")

function pasarPagina (){
    fetch("https://rickandmortyapi.com/api/character/?page=" + page)
      .then((response) => {
        if (!response.ok) {
          throw new Error('La solicitud no fue exitosa');
        }
        return response.json();
      })
      .then((data) => {
        lista.innerHTML = ''
        data.results.forEach(function (personaje){
            const elementLi = document.createElement("li")
            lista.appendChild(elementLi)
            elementLi.innerHTML =   `<img src="${personaje.image}" alt=""/>
        <p><spam>Name: </spam>${personaje.name}</p>
        <p><spam>Species: </spam>${personaje.species}</p>`})
     
      })
      .catch((error) => {
        lista.innerText = 'Error: No se pudo obtener imagenes';
      });
}

pasarPagina()

prevPag.addEventListener('click', function (){
    page--
    if (page<1){page = 1}

    pasarPagina()
})

nextPag.addEventListener('click', function (){
    page++
    pasarPagina()
})

/*for(let i=0; i<data.results.length; i++){
    const elementLi = document.createElement("li")
    lista.appendChild(elementLi)
    elementLi.innerHTML =   `<img src="${data.results[i].image}" alt=""/>
    <p><spam>Name:</spam>${data.results[i].name}</p>
    <p><spam>Species:</spam>${data.results[i].species}</p>`
}*/