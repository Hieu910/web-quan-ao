const bar=document.getElementById("bar");
const nav=document.getElementById("navbar");
const mobileclose = document.getElementById("mobile-close");

if(bar){
    bar.onclick=function(){
        nav.classList.add('active');
    }
}
if(mobileclose){
    mobileclose.onclick=function(){
        nav.classList.remove('active');
    }
}



