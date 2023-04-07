let toggle = document.getElementById("mode");

toggle.addEventListener('click',() =>{
    document.body.classList.toggle('dark');
    let e = document.querySelectorAll('[data-dark]');
    for (let i in e) if (e.hasOwnProperty(i)) {
        e[i].classList.toggle('dark');        
    }
});