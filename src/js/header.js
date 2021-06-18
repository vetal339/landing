document.querySelector('.header__ellipse')
    .addEventListener('mouseover',function (){
        document.querySelector('.header__contact').style.display = "block";
        document.querySelector('.header__ellipse').style.display = "none";
    });

document.querySelector('.header__contact')
    .addEventListener('mouseout',function (){
        document.querySelector('.header__contact').style.display = "none";
        document.querySelector('.header__ellipse').style.display = "block";
    });
