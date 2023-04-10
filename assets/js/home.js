/*Events*/
slideTime = 5000;
var interval = null;
var slideCurrent = 0;

var slides = document.querySelectorAll('.depoiments--item');

slides.forEach( (each)=> {
    each.addEventListener("mouseover", ()=>{
        stopInterval();
    });
});

slides.forEach( (each)=> {
    each.addEventListener("mouseout", ()=>{
        slideshow();
    });
});

const array_pointers = document.querySelectorAll('.depoiments--pointers a');
array_pointers.forEach( (each) => {
    each.addEventListener('click', (e) => {
        e.preventDefault();

        updateSlideshow(e.target.getAttribute('data-pointer'));
    });
    each.addEventListener("mouseover", ()=>{
        stopInterval();
    });
    each.addEventListener("mouseout", ()=>{
        slideshow();
    });
});

function updateSlideshow (param){

    console.log(param)
    if(param !== undefined){
        document.querySelector('.depoiments--pointers a.active').classList.remove('active'); 
        if(param == 0){
            document.querySelector(".depoiments--area").style.marginLeft = '-0';
            document.querySelector(`.depoiments--pointers a[data-pointer="${param}"]`).classList.add('active');
        }else if(param == 1){
            document.querySelector(".depoiments--area").style.marginLeft = '-100vw';
            document.querySelector(`.depoiments--pointers a[data-pointer="${param}"]`).classList.add('active');
        }else if(param == 2){
            document.querySelector(".depoiments--area").style.marginLeft = '-200vw';
            document.querySelector(`.depoiments--pointers a[data-pointer="${param}"]`).classList.add('active');
        }else if(param == 3){
            document.querySelector(".depoiments--area").style.marginLeft = '-300vw';
            document.querySelector(`.depoiments--pointers a[data-pointer="${param}"]`).classList.add('active');
        }else if(param == 4){
            document.querySelector(".depoiments--area").style.marginLeft = '-400vw';
            document.querySelector(`.depoiments--pointers a[data-pointer="${param}"]`).classList.add('active');
        }else if(param == 5){
            document.querySelector(".depoiments--area").style.marginLeft = '-500vw';
            document.querySelector(`.depoiments--pointers a[data-pointer="${param}"]`).classList.add('active');
        }else if(param == 6){
            document.querySelector(".depoiments--area").style.marginLeft = '-600vw';
            document.querySelector(`.depoiments--pointers a[data-pointer="${param}"]`).classList.add('active');
        }else if(param == 7){
            document.querySelector(".depoiments--area").style.marginLeft = '-700vw';
            document.querySelector(`.depoiments--pointers a[data-pointer="${param}"]`).classList.add('active');
        }else if(param == 8){
            document.querySelector(".depoiments--area").style.marginLeft = '-800vw';
            document.querySelector(`.depoiments--pointers a[data-pointer="${param}"]`).classList.add('active');
        }else if(param == 9){
            document.querySelector(".depoiments--area").style.marginLeft = '-900vw';
            document.querySelector(`.depoiments--pointers a[data-pointer="${param}"]`).classList.add('active');
        }else if(param == 10){
            document.querySelector(".depoiments--area").style.marginLeft = '-1000vw';
            document.querySelector(`.depoiments--pointers a[data-pointer="${param}"]`).classList.add('active');
        }else if(param == 11){
            document.querySelector(".depoiments--area").style.marginLeft = '-1100vw';
            document.querySelector(`.depoiments--pointers a[data-pointer="${param}"]`).classList.add('active');
        }else {
            document.querySelector(".depoiments--area").style.marginLeft = '-1200vw';
            
            document.querySelector(`.depoiments--pointers a[data-pointer="${param}"]`).classList.add('active');
        }
    }
}

function slideshow () {    
    
    interval= setInterval( () => {
        let pointer = document.querySelector('.depoiments--pointers a.active')
        .getAttribute('data-pointer');

        document.querySelector('.depoiments--pointers a.active').classList.remove('active');        

        if(pointer){
            if(slideCurrent == 0){
                document.querySelector(".depoiments--area").style.marginLeft = '-100vw';
                slideCurrent++;
                document.querySelector(`.depoiments--pointers a[data-pointer="${slideCurrent}"]`).classList.add('active');

            }else if(slideCurrent == 1){
                document.querySelector(".depoiments--area").style.marginLeft = '-200vw';
                slideCurrent++;
                document.querySelector(`.depoiments--pointers a[data-pointer="${slideCurrent}"]`).classList.add('active');
            }else if(slideCurrent == 2){
                document.querySelector(".depoiments--area").style.marginLeft = '-300vw';
                slideCurrent++;
                document.querySelector(`.depoiments--pointers a[data-pointer="${slideCurrent}"]`).classList.add('active');
            }else if(slideCurrent == 3){
                document.querySelector(".depoiments--area").style.marginLeft = '-400vw';
                slideCurrent++;
                document.querySelector(`.depoiments--pointers a[data-pointer="${slideCurrent}"]`).classList.add('active');
            }else if(slideCurrent == 4){
                document.querySelector(".depoiments--area").style.marginLeft = '-500vw';
                slideCurrent++;
                document.querySelector(`.depoiments--pointers a[data-pointer="${slideCurrent}"]`).classList.add('active');
            }else if(slideCurrent == 5){
                document.querySelector(".depoiments--area").style.marginLeft = '-600vw';
                slideCurrent++;
                document.querySelector(`.depoiments--pointers a[data-pointer="${slideCurrent}"]`).classList.add('active');
            }else if(slideCurrent == 6){
                document.querySelector(".depoiments--area").style.marginLeft = '-700vw';
                slideCurrent++;
                document.querySelector(`.depoiments--pointers a[data-pointer="${slideCurrent}"]`).classList.add('active');
            }else if(slideCurrent == 7){
                document.querySelector(".depoiments--area").style.marginLeft = '-800vw';
                slideCurrent++;
                document.querySelector(`.depoiments--pointers a[data-pointer="${slideCurrent}"]`).classList.add('active');
            }else if(slideCurrent == 8){
                document.querySelector(".depoiments--area").style.marginLeft = '-900vw';
                slideCurrent++;
                document.querySelector(`.depoiments--pointers a[data-pointer="${slideCurrent}"]`).classList.add('active');
            }else if(slideCurrent == 9){
                document.querySelector(".depoiments--area").style.marginLeft = '-1000vw';
                slideCurrent++;
                document.querySelector(`.depoiments--pointers a[data-pointer="${slideCurrent}"]`).classList.add('active');
            }else if(slideCurrent == 10){
                document.querySelector(".depoiments--area").style.marginLeft = '-1100vw';
                slideCurrent++;
                document.querySelector(`.depoiments--pointers a[data-pointer="${slideCurrent}"]`).classList.add('active');
            }else if(slideCurrent == 11){
                document.querySelector(".depoiments--area").style.marginLeft = '-1200vw';
                slideCurrent++;
                document.querySelector(`.depoiments--pointers a[data-pointer="${slideCurrent}"]`).classList.add('active');
            }else {
                document.querySelector(".depoiments--area").style.marginLeft = '0';
                slideCurrent = 0;
                document.querySelector(`.depoiments--pointers a[data-pointer="${slideCurrent}"]`).classList.add('active');
            }
        }
    }, 5000);

}

function stopInterval(){
    clearInterval(interval);
}

slideshow();