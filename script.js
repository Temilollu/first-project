var popUp = document.querySelector('.modal');
var selectButton = document.querySelector('#header-button');
var noButton = document.querySelector('.modal__action__negative');

function buttonWork(){
    popUp.style.display = 'block';
}
function noButt(){
popUp.style.display = 'none';
}

selectButton.addEventListener('click', buttonWork);
noButton.addEventListener('click', noButt);
//popUp.style.display = 'block';