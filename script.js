let hamburger = document.querySelector('.hamburger');
let cancel = document.querySelector('.cancel');

let left = document.querySelector('.left');
let right = document.querySelector('right');

let navs = document.querySelector('.navs');
let logo = document.querySelector('.logo');
let one = document.querySelector('.one');
let two = document.querySelector('.two');
let three = document.querySelector('.three');


hamburger.addEventListener ('click', () => {
    console.log ('im here');
    navs.classList.toggle('appear');
    logo.classList.toggle('appear');
    hamburger.classList.toggle('appear');
    cancel.classList.toggle('appear');
    one.classList.toggle('appear');
    two.classList.toggle('appear');
   three.classList.toggle('appear');
});


cancel.addEventListener ('click', () => {
    console.log ('im here');
    navs.classList.toggle('appear');
    logo.classList.toggle('appear');
    hamburger.classList.toggle('appear');
    cancel.classList.toggle('appear');
    one.classList.toggle('appear');
    two.classList.toggle('appear');
    three.classList.toggle('appear');
});

function prev() {

    let check = document.querySelector('.one') 
    let check_one = window.getComputedStyle(check).display;

    if (check_one!=="none")
    {
        document.querySelector('.one').style.display='none';
        document.querySelector('.two').style.display='none';
        document.querySelector('.three').style.display='block';
    }

    else  {
        let check_two = window.getComputedStyle(document.querySelector('.two')).display;
        
        if (check_two!=="none"){
        document.querySelector('.one').style.display='block';
        document.querySelector('.two').style.display='none';
        document.querySelector('.three').style.display='none';
    }

    else 
    {
        document.querySelector('.one').style.display='none';
        document.querySelector('.two').style.display='block';
        document.querySelector('.three').style.display='none';
    }}
}

function next() {
    let check = document.querySelector('.one');
    let check_one = window.getComputedStyle(check).display;

    if (check_one!=="none")
    {
        document.querySelector('.one').style.display='none';
        document.querySelector('.two').style.display='block';
        document.querySelector('.three').style.display='none';
    }

    else {
        let check_two = window.getComputedStyle(document.querySelector('.two')).display;
        if (check_two!=="none"){
            document.querySelector('.one').style.display='none';
            document.querySelector('.two').style.display='none';
            document.querySelector('.three').style.display='block';
        }
    

    else {
        document.querySelector('.one').style.display='block';
        document.querySelector('.two').style.display='none';
        document.querySelector('.three').style.display='none';
    }}
}