const ofertas=['oferta1.jfif','oferta2.jpg','oferta3.jpg']
let indice=0

const siguiente=document.getElementById('siguiente')
const anterior=document.getElementById('anterior')
const foto=document.getElementById('foto')

function mostrar(){ 
    foto.src="img/"+ofertas[indice]
}
siguiente.addEventListener('click',function(){
    indice++
    if(indice==ofertas.length){
        indice=0
    }
    mostrar()
})
anterior.addEventListener('click',function(){
    indice--
    if(indice<0){
        indice=ofertas.length-1
    }
    mostrar()
})
mostrar()