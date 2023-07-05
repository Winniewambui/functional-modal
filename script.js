const modalButton = document.querySelector('.modal-btn');
const modal= document.querySelector('.modal-overlay');
const closeBtn = document.querySelector('.close-btn');


modalButton.addEventListener('click', function(){

    modal.classList.add('open-modaloverlay')
})

closeBtn .addEventListener('click', function(){

    modal.classList.remove('open-modaloverlay')
})

