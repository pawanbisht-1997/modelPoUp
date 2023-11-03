const popUp = document.querySelector('#popUpBody');
function OpenModel(){
    popUp.style.opacity = '1';
    popUp.style.zIndex = '1';
    popUp.style.transform = 'scale(1)';

}
function closePop(){
    popUp.style.opacity = '0';
    popUp.style.zIndex = '-1';
    popUp.style.transform = 'scale(0)';
   
}