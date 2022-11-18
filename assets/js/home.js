/*Events*/
const array_pointers = document.querySelectorAll('.depoiments--pointers a');
array_pointers.forEach( (each) => {
    each.addEventListener('click', (e) => {
        e.preventDefault();

        updateSlideshow(e.target.getAttribute('data-pointer'));
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
        }else {
            document.querySelector(".depoiments--area").style.marginLeft = '-200vw';
            
            document.querySelector(`.depoiments--pointers a[data-pointer="${param}"]`).classList.add('active');
        }
    }
}
function slideshow () {    
    
    let slideCurrent = 0; 

    setInterval( () => {
        let pointer = document.querySelector('.depoiments--pointers a.active').getAttribute('data-pointer');
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
            }else {
                document.querySelector(".depoiments--area").style.marginLeft = '0';
                slideCurrent = 0;
                document.querySelector(`.depoiments--pointers a[data-pointer="${slideCurrent}"]`).classList.add('active');
            }
        }
    }, 4000);

}

slideshow();