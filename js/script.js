const nameOfPage = document.querySelector('.nameOfPage'),
    registered = document.querySelector('.registered').getElementsByTagName('p')[0],
    happy = document.querySelector('.happy').getElementsByTagName('p')[0],
    girlsOnline = document.getElementsByClassName('online');
    
window.onload = function() {
    nameOfPage.style.borderBottom = '2px solid #6866d1';
    // localStorage.setItem('oneDay', 86400000);
    // localStorage.registered ? registered.innerHTML = localStorage.getItem('registered') : localStorage.setItem('registered', registered.innerHTML);
    // localStorage.happy ? happy.innerHTML = localStorage.getItem('happy') : localStorage.setItem('happy', happy.innerHTML);
    // let countReg = setInterval(function() {
    //     registered.innerHTML = localStorage.getItem('registered');
    //     registered.innerHTML = +registered.innerHTML + 1;
    //     localStorage.setItem('registered', registered.innerHTML);
    // }, 10000)
    // let countHap = setInterval(function() {
    //     happy.innerHTML = localStorage.getItem('happy');
    //     happy.innerHTML = +happy.innerHTML + 1;
    //     localStorage.setItem('happy', happy.innerHTML);
    // }, 30000)
    // setTimeout(function() {
    //     clearInterval(countReg);
    //     clearInterval(countHap);
    // }, localStorage.getItem('oneDay'))

    for(i = 0; i < girlsOnline.length; i += 1) {
        girlsOnline[i].children[0].innerHTML = Math.floor(Math.random() * Math.floor(9999));
    }
}

// localStorage.clear();