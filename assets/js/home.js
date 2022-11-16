/*Events*/
const array_pointers = document.querySelectorAll('.depoiments--pointers a');
array_pointers.forEach( (each) => {
    each.addEventListener('click', (e) => {
        e.preventDefault();

        updateSlide();
    });
});

function updateSlide(){



}

function slideshow () {    
    
    let slideCurrent = 0;

    setInterval( () => {
        let pointer = document.querySelector('.depoiments--pointers a.active').getAttribute('data-pointer');
        // let sliders = document.querySelector('.depoiments--pointers a.active').classList.remove('active');

        if(pointer){
            if(slideCurrent == 0){
                document.querySelector(".depoiments--area").style.marginLeft = '-100vw';
                slideCurrent++;
                console.log(slideCurrent)              
            }else if(slideCurrent == 1){
                document.querySelector(".depoiments--area").style.marginLeft = '-200vw';
                slideCurrent++;
                console.log(slideCurrent) 
            }else {
                document.querySelector(".depoiments--area").style.marginLeft = '0';
                slideCurrent = 0;
            }
        }
    }, 4000);

}

slideshow();