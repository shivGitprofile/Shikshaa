window.addEventListener('scroll',()=>
{
document.querySelector('nav').classList.toggle
('window-scroll',window.scrollY > 0)
}
)

//show/hide faqs
const faqs=document.querySelectorAll('.faq');
faqs.forEach(faqs=>
{
 faqs.addEventListener('click',()=>{
    faqs.classList.toggle('open');
 

    //Change Icon
   const icon=faq.querySelector('.faq_icon i');
    if(icon.classname==='bi bi-plus-lg'){
        icon.classname='bi bi-dash-lg'
    }else
    {
        icon.classname='bi bi-plus-lg'
    }
 })
})

// show/hide the nav menu

const menu=document.querySelector(".nav_menu");
const openbtn=document.querySelector("#open-menu-btn");
const closebtn=document.querySelector("#close-menu-btn");

openbtn.addEventListener('click',() =>{
    menu.style.display="flex";
    closebtn.style.display="inline-block";
    openbtn.style.display="none";
})

// close nav menu

const closenav = () => {
    menu.style.display="none";
    closebtn.style.display="none";
    openbtn.style.display="inline-block";
        

}

closebtn.addEventListener('click',closenav)

// gsap.from(".nav_container a",{
//     y:-50,
//     opacity:0,
//     delay:0.4,
//     duration:0.3
// }) 