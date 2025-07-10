function initDesktop2() {
  console.log("Incarc site-ul de desktop micropig2");
async function incarcaSVG2() {
  // SVG #1 – background principal
  const responseMicro = await fetch("Vectori/Groupmicro.svg");
  const svgMicro = await responseMicro.text();
  document.getElementById("partea2micro").innerHTML = svgMicro;

   gsap.registerPlugin(ScrollTrigger);
gsap.fromTo("#Union", 
  {  opacity: 0 }, 
  { 
    opacity: 1, duration: 1.3, ease: "power3.out",
    scrollTrigger: {
      trigger: "#partea2micro",
      start: "top 80%",
          end: "bottom 10%",
     scrub:true,
 
    }
  });





  
  const cercuriz = [
    { id: "cerc1", y: -30, start: "top 85%", end: "top 50%" },
    { id: "cerc2", y: -90, start: "top 90%", end: "top 40%" },
    { id: "cerc3", y: -76, start: "top 95%", end: "top 30%" },
    { id: "cerc4", y: -110, start: "top 92%", end: "top 35%" },
    { id: "cerc5", y: -60, start: "top 88%", end: "top 42%" },
    { id: "cerc6", y: -130, start: "top 93%", end: "top 33%" },
    { id: "cerc7", y: -120, start: "top 89%", end: "top 39%" },
     { id: "cerc8", y: -56, start: "top 89%", end: "top 39%" },
      { id: "cerc11", y: -40, start: "top 89%", end: "top 39%" },
  ];


  cercuriz.forEach(({ id, y }) => {
    const elem = document.getElementById(id);
    if (elem) {
      gsap.fromTo(elem,
        { y: 0 },
        {
          y: y,
          scrollTrigger: {
            trigger: "#partea2micro",
            start: "top 90%",
            end: "bottom 10%",
            scrub: 1,
            
          },
          ease: "sine.inOut",
          duration: 3,
        }
      );
    }
  });


  // Așteaptă 3 secunde după ce primul SVG e injectat
  await new Promise(resolve => setTimeout(resolve, 1000));
 const responseMicro2 = await fetch("Vectori/Group_micropig.svg");
  const svgMicro2 = await responseMicro2.text();
  document.getElementById("partea3micro").innerHTML = svgMicro2;

  const sprancene=document.getElementById("Sprancenele");
const cercuriy = [
    { id: "zcerc1", y: -140, start: "top 85%", end: "top 50%" },
    { id: "zcerc2", y: -60, start: "top 90%", end: "top 40%" },
    { id: "zcerc3", y: -120, start: "top 95%", end: "top 30%" },
    { id: "zcerc4", y: -110, start: "top 92%", end: "top 35%" },
    { id: "zcerc5", y: -50, start: "top 88%", end: "top 42%" },
    { id: "zcerc6", y: -90, start: "top 93%", end: "top 33%" },
    { id: "zcerc7", y: -180, start: "top 89%", end: "top 39%" },
    { id: "zcerc8", y: -20, start: "top 88%", end: "top 33%" },
    { id: "zcerc9", y: -40, start: "top 93%", end: "top 33%" },
  ];

  const trx = document.getElementById("partea3micro");

  cercuriy.forEach(({ id, y }) => {
    const elem = document.getElementById(id);
    if (elem) {
      gsap.fromTo(elem,
        { y: 0 },
        {
          y: y,
          scrollTrigger: {
            trigger: trx,
            start: "top 90%",
            end: "bottom 10%",
            scrub: 1,
          
          },
          ease: "sine.inOut",
          duration: 3,
        }
      );
    }
  });


  // GSAP și ScrollTrigger pentru partea3micro sticky și animații asociate
ScrollTrigger.create({
  trigger: "#partea3micro",
  start: "top 30%",
  end: "+=100%", // Ajustează acest procent pentru durata dorită a sticky-ului
  pin: true, // menține sticky
  scrub: true, // animație lină bazată pe scroll

  
});

// Animația pentru opacitate "Buzele"
gsap.fromTo("#Buzele",
  { opacity: 1 },
  {
    opacity: 0,
    scrollTrigger: {
      trigger: "#partea3micro",
      start: "top 30%",
      end: "+=100%",
      scrub: true,
    }
  }
);

// Animația pentru opacitate "Sprancenele"
gsap.fromTo(sprancene,
  { opacity: 0 },
  {
    opacity: 1,
    scrollTrigger: {
      trigger: "#partea3micro",
      start: "top 30%",
      end: "+=100%",
      scrub: true,
    
    }
  }
);

// Deplasare pe axa X pentru grupul "tale+linie"
gsap.fromTo("#tale\\+linie",
  { x: 0 },
  {
    x: 50, // ajustează valoarea în funcție de cât vrei să deplasezi grupul
    scrollTrigger: {
      trigger: "#partea3micro",
      start: "top 30%",
      end: "+=100%",
      scrub: true,
    }
  }
);
//dela micro4

const responseMicro3 = await fetch("Vectori/cercuri_negre.svg");
  const svgMicro3 = await responseMicro3.text();
  document.getElementById("cercuri").innerHTML = svgMicro3;
  const cercuri_negre=[ 
    {id:"c1",y:-150,dur:8},
    {id:"c2",y:-90,dur:10},
     {id:"c3",y:70,x:40,dur:5},
    {id:"c4",y:50,x:-60,dur:6},
      {id:"c5",x:80,dur:7},
    {id:"c6",y:50,x:-60,dur:8},
       {id:"c7",y:70,x:40,dur:7},
    {id:"c8",y:50,x:100,dur:7},
    {id:"pds1",y:10,dur:3},
    {id:"pds2",y:-10,dur:4},
  ];

  cercuri_negre.forEach(({id,y,x,dur})=>{
    const element=document.getElementById(id);


  gsap.fromTo(element,
    {y:0,x:0}
    ,{y:y,
      x:x,
      duration:dur,
      repeat: -1, // se repetă la infinit
    yoyo: true, // se întoarce la poziția inițială
       ease: "sine.out", // opțional: face mișcarea mai fluidă
});

 });




 

 const cele2pozenegre=await fetch("Vectori/Groupsprancenesigene.svg");
 const textulcelor2poze= await cele2pozenegre.text();
 document.getElementById("partea5micro").innerHTML=textulcelor2poze;





 const pozastangamicro=document.getElementById("micropigspranceneedit");
 const pozadreaptamicro=document.getElementById("microbuze3edit");



  requestAnimationFrame(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Ochi – urcă ușor
  gsap.to(pozastangamicro, {
    y: -150, // urcă 30px
    ease: "sine.inOut",
    scrollTrigger: {
      trigger: pozastangamicro,
      start: "top 90%",
      end: "bottom 10%",
      scrub: true,
      
    }
  });

  // Buze – coboară ușor
  gsap.to(pozadreaptamicro, {
    y: 150, // coboară 30px
    ease: "sine.inOut",
    scrollTrigger: {
      trigger: pozadreaptamicro,
      start: "top 90%",
      end: "bottom 10%",
      scrub: true,
       
    }
  });
});




 
  

}
  incarcaSVG2();




gsap.registerPlugin(ScrollTrigger);
const textul=document.getElementById("pt6micro");
const trigerul=document.getElementById("partea6micro");
gsap.fromTo(textul, 
  { opacity: 0, y: 30 },
  { 
    opacity: 1, 
    y: 0, 
    duration: 1.2, 
    ease: "power2.out",
    scrollTrigger: {
      trigger: trigerul,
      start: "top 5%", // când intră 20% în ecran
      toggleActions: "play none none none",
    
    }
  });


  const buzeGlass = document.getElementById("buze_glass");
const spranceneGlass = document.getElementById("sprancene_glass");

buzeGlass.addEventListener("mouseenter", () => {
  spranceneGlass.classList.add("hovered-other");
});
buzeGlass.addEventListener("mouseleave", () => {
  spranceneGlass.classList.remove("hovered-other");
});
spranceneGlass.addEventListener("mouseenter", () => {
  buzeGlass.classList.add("hovered-other");
});
spranceneGlass.addEventListener("mouseleave", () => {
  buzeGlass.classList.remove("hovered-other");
});

gsap.fromTo("#smh1", 
  {
    opacity: 0,
    y: 80
  },
  {
    opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#smh1",
  start: "top+=50vh top",
      toggleActions: "play none none none",// animat o singură dată,
    
    }
  }
);



gsap.fromTo("#instatext",{opacity:0,y:80},{

opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#insta",
start: "top+=60vh top",       // când partea de jos a elementului ajunge la baza viewportului
      toggleActions: "play none none none",// animat o singură dată,

    }

});

gsap.fromTo("#mockinsta",{opacity:0,x:80},{

opacity: 1,
    x: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#insta",
start: "top+=60vh top",    
      toggleActions: "play none none none",// animat o singură dată,

    }

});



gsap.fromTo("#tiktoktex",{opacity:0,y:80},{

opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#tiktokul",
start: "top+=60vh top",    
      toggleActions: "play none none none",// animat o singură dată,

    }

});

gsap.fromTo("#mocktt",{opacity:0,y:80},{

opacity: 1,
    y: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#tiktokul",
start: "top+=60vh top",    
      toggleActions: "play none none none",// animat o singură dată,
     

    }

});



gsap.fromTo("#facebooktext",{opacity:0,y:80},{

opacity: 1,
    x: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#facebookul",
start: "top+=60vh top",   
      toggleActions: "play none none none",// animat o singură dată,

    }

});

gsap.fromTo("#mockfb",{opacity:0,x:-80},{

opacity: 1,
    x: 0,
    duration: 1.2,
    ease: "power3.out",
    scrollTrigger: {
      trigger: "#facebookul",
start: "top+=60vh top",   
      toggleActions: "play none none none",// animat o singură dată,

    }

});

}





function initMobile2() {
  console.log("Incarc site-ul de mobil micropig");
  // Toată logica mobil aici









}






if (window.matchMedia("(min-width: 901px)").matches) {
  initDesktop2();
} else {
  initMobile2();
}