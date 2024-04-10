// ----------------- Navbar Active ------------------------

let list = document.querySelectorAll('.nav li a');

function activeLink(){
    list.forEach((e)=> e.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((e)=>
e.addEventListener('click', activeLink))

// -------------- Typing Style ------------------------

var typed = new Typed('.typing',{
    strings:['Software Engineer','Web Developer','Frontend Developer'],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})