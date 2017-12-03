const button = document.getElementById('animeerKnop');
const vlakje = document.querySelectorAll('.vlakje');
vlakje[0].style.backgroundColor = 'red';
vlakje[1].style.backgroundColor = 'lightgrey';
vlakje[2].style.backgroundColor = 'blue';
const schuif = () => {
    for (let i = 0; i < vlakje.length; i++) {
        setTimeout(function(){vlakje[i].classList.toggle('vlakje--expand')}, i*100);
    }
}
animeerKnop.addEventListener('click', schuif);
