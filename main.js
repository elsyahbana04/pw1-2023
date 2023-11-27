let search =document.queryselector('.seacrh-box');

document.queryselector('#search-icon').onclick=() =>{
    search.classlist.toggle('active');
    Navbar.classlist.remove('active');
}

let Navbar =document.queryselector('.Navbar');

document.querySelector('#menu-icon').onclick= () =>{
    Navbar.classlist.toggle('active');
    search.classlist.remove('active');
}

window.onscroll = () => {
    Navbar.classlist.remove('active');
    search.classlist.remove('active');
}



let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY> 0);
});
