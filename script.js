//Declarar Variables
const toggle = document.getElementById('toggledark');
const body = document.querySelector('body');
//adjuntando controlador de eventos
toggle.addEventListener('click', function(){
    this.classList.toggle('bi-moon');
    if(this.classList.toggle('bi-brightness-high-fill')){
        //modo claro
        body.style.background = 'white';
        body.style.color = 'black';
        body.style.transition = '2s';
    }else{
        //modo oscuro
        body.style.background = 'black';
        body.style.color = 'white';
        body.style.transition = '2s'
    }
})