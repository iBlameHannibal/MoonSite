let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountines3 = document.getElementById('mountines3');
let mountines4 = document.getElementById('mountines4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let maede = document.querySelector('.maede');
window.onscroll = function(){
    let value = scrollY;
stars.style.left = value + 'px';
moon.style.top = value * 3 + 'px';
mountines3.style.top = value * 2 + 'px';
mountines4.style.top = value * 1.5 + ' px';
river.style.top = value + 'px';
boat.style.left = value * 3 +'px';
maede.style.fontSize = value + 'px';
if(scrollY >= 88){
    maede.style.fontSize = 88 + 'px';
    maede.style.position = 'fixed';
    if(scrollY >= 345){
        maede.style.display = 'none';

    }else{
        maede.style.display = 'block'
    }
    if(scrollY >= 134){
        document.querySelector('main').style.background = 'linear-gradient(#376281,#10001f)'
    }
}
}

//153