document.addEventListener('DOMContentLoaded', function() {
    let div = document.getElementById('div').classList.add('classAdded');
    let p = document.getElementsByClassName('classP')[0].classList.add('pClass');
    let p1 = document.getElementsByTagName('p');
    for (let i = 0; i < p1.length; i++) {
        p1[i].classList.add('allP');
    }

    let button = document.querySelector('.btn').innerHTML = 'Call method';
    let el = document.querySelectorAll('.a');
    for (let i = 0; i < el.length; i++) {
        el[i].classList.add('allE');
    }
})