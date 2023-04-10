function scrollcall(){
    var txt=document.querySelector(".subpara");
    var txtpos=txt.getBoundingClientRect().top;
   var pos=window.innerHeight/2.5;
   if(txtpos<pos){
        txt.classList.add("subappear");
  }
}
window.addEventListener("scroll",scrollcall);
