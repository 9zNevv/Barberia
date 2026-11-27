const abrir=document.getElementById('abrir')
const cerrar=document.getElementById('cerrar')
const modal=document.getElementById('modal')
abrir.addEventListener('click', function(){
    modal.showModal();
})
cerrar.addEventListener('click',function(){
    modal.close()
})
