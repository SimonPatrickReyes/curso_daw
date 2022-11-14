//creamos un card nuevo

/* <div class="card">
<img src="img/hacer2.jpg">
<div class="info">
    <p class="categoria concierto">concierto</p>
    <p class="titulo">Rock en Los Ángeles</p>
    <p class="precio">$300 por persona</p>
</div>
</div> <!--.card--> */

//creamos los tres parrafos

const parrafo1=document.createElement('p')
parrafo1.textContent="Perro molon"
parrafo1.classList.add('concierto', 'categoria')

const parrafo2=document.createElement('p')
parrafo2.textContent="Rock en Benalmádena"
parrafo2.classList.add('titulo')

const parrafo3=document.createElement('p')
parrafo3.textContent="$500000 por persona"
parrafo3.classList.add('precio')

//creamos el div info
const info=document.createElement('div')
info.classList.add('info')

//añadir hijos
info.appendChild(parrafo1)
info.appendChild(parrafo2)
info.appendChild(parrafo3)

//creamos la imagen
const img=document.createElement('img')
img.src="https://i.pinimg.com/originals/13/69/9f/13699f9af819dee4be854a3c88c3f265.jpg"

//creamos el contenedor card
const newCard=document.createElement('div')
newCard.classList.add('card')

//añadimos los elementos
newCard.appendChild(info)
newCard.appendChild(img)

//insertarlo en el HTML
const cardParent=document.querySelector('.contenedor-cards')
cardParent.appendChild(newCard)
