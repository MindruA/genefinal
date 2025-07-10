  if (window.matchMedia("(max-width: 901px)").matches) {
  console.log("Incarc site-ul de mobil");
  // Toată logica mobil aici

async function incarcaSVG2() {
  // SVG #1 – background principal
  const responseIntrotlf = await fetch("Vectori/iPhone16Pro2.svg");
  const svgIntrotlf = await responseIntrotlf.text();
  document.getElementById("backmaintlf").innerHTML = svgIntrotlf;


  // SVG #1 – background principal
  const responseIntrotlf2 = await fetch("Vectori/curgerepetlf.svg");
  const svgIntrotlf2 = await responseIntrotlf2.text();
  document.getElementById("lichiddesus").innerHTML = svgIntrotlf2;

  const backs=document.getElementById("backmaintlf");
  const curgerepetlf=document.getElementById("curgerepetlf");
  curgerepetlf.style.transform="translateY(-100%)";

   const pf2 = document.getElementById("pf2telefon");
  const pozagene = document.getElementById("pozagene");

  const scrismicro=document.getElementById("Micropigmentationtlf");
  const scrislash=document.getElementById("Lash_extensionstlf");


 const microtlf = await fetch("Vectori/Mentiune2micro.svg");
  const microtlftxt = await microtlf.text();
  document.getElementById("partea7").innerHTML = microtlftxt;

  curculete=[
    {id:"zc1",y:-10,opacity:0,start: "top 85%",end: "top 50%"},
    {id:"zc2",y:-80,opacity:0,start: "top 50%", end: "top 40%"},
    {id:"zc3",y:-40,opacity:0,start: "top 85%",end: "top 30%"},
    {id:"zc4",y:-80,opacity:0,start: "top 50%",end: "top 35%"},
    {id:"zc5",y:-50,opacity:0,start: "top 85%", end: "top 42%"},
    {id:"zc6",y:-50,opacity:0,start: "top 85%", end: "top 39%"},
    {id:"zc7",y:-20,opacity:0,start: "top 50%", end: "top 42%"},
    {id:"zc8",y:-50,opacity:0,start: "top 50%",   end: "top 39%" },

  ];
 

 curculete.forEach((cerc) => {
  const elementx = document.getElementById(cerc.id);
  if (!elementx) return; // Dacă nu găsește elementul, nu face nimic


  gsap.fromTo(elementx,{y:0},{
    y:cerc.y,
    ease: "power3.inOut",
    scrollTrigger: {
      trigger: "#partea7",
      start: "top 70%",
  
      scrub:1,

    },
    duration:3,
  });
});


  // Așteaptă 3 secunde după ce primul SVG e injectat
  await new Promise(resolve => setTimeout(resolve, 1500));
 // SVG #3 – mentiune
  const responseMentiunetlf = await fetch("Vectori/gruptelefonpartea4.svg");
  const svgMentiunetlf = await responseMentiunetlf.text();
  document.getElementById("mentiune2").innerHTML = svgMentiunetlf;

  const cercuri = [
    { id: "cerc1", y: -100, start: "top 85%", end: "top 50%" },
    { id: "cerc2", y: -60, start: "top 90%", end: "top 40%" },
    { id: "cerc3", y: -60, start: "top 95%", end: "top 30%" },
    { id: "cerc4", y: -110, start: "top 92%", end: "top 35%" },
    { id: "cerc5", y: -5, start: "top 88%", end: "top 42%" },
    
    { id: "cerc7", y: -40, start: "top 89%", end: "top 39%" },
  ];

  const trz = document.getElementById("mentiune2");

  cercuri.forEach(({ id, y }) => {
    const elem = document.getElementById(id);
    if (elem) {
      gsap.fromTo(elem,
        { y: 0 },
        {
          y: y,
          scrollTrigger: {
            trigger: trz,
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

  // Animația liniei
  const path = document.getElementById("linie");
  if (path) {
    const length = path.getTotalLength();
    path.style.strokeDasharray = length;
    path.style.strokeDashoffset = length;

    gsap.to(path, {
      strokeDashoffset: 0,
      duration: 0.6,
      ease: "power2.out",
      scrollTrigger: {
        trigger: path,
        start: "top 80%",
        toggleActions: "play none none none"
      }
    });
  }


    // Așteaptă 3 secunde după ce primul SVG e injectat
  await new Promise(resolve => setTimeout(resolve, 1500));
 // SVG #3 – mentiune
  const responsep5tlf = await fetch("Vectori/p5tlf.svg");
  const svgp5tlf = await responsep5tlf.text();
  document.getElementById("partea5intermediara").innerHTML = svgp5tlf;

  const cercuri2 = [
    { id: "c1", y: -100, start: "top 85%", end: "top 50%" ,dur:4 },
    { id: "c2", y: -60, start: "top 90%", end: "top 40%",dur:2  },
    { id: "c3", y: -100, start: "top 95%", end: "top 30%" ,dur:4 },
    { id: "c4", y: -110, start: "top 92%", end: "top 35%" ,dur:8 },
    { id: "c5", y: -120, start: "top 88%", end: "top 42%",dur:3 },
    { id: "c7", y: -5, start: "top 89%", end: "top 39%",dur:6  },
  ];


 cercuri2.forEach(({ id, y,dur }) => {
    const elem23 = document.getElementById(id);
    const elez=document.getElementById(dur);
    if (elem23) {
      gsap.fromTo(elem23,
        { y: 0 },
        {
          y: y,
          scrollTrigger: {
            trigger: "#partea5intermediara",
            start: "top 90%",
            end: "bottom 10%",
            scrub: 1,
          },
          ease: "sine.inOut",
          duration: dur,
        }
      );
    }
  });

  const pozasus1=document.getElementById("ochi");
  const pozajos2=document.getElementById("buze");
  gsap.to(pozasus1,{
    y:-30,
    scrollTrigger:{
       trigger: "#partea5intermediara",
            start: "top 90%",
            end: "bottom 10%",
            scrub: 1,


    }
  });
   gsap.to(pozajos2,{
    y:40,
    scrollTrigger:{
       trigger: "#partea5intermediara",
            start: "top 90%",
            end: "bottom 10%",
            scrub: 1,


    }
  });

  
 






ScrollTrigger.refresh();



}
document.addEventListener("DOMContentLoaded", () => {
incarcaSVG2();



 document.documentElement.style.overflow = "hidden";
 document.body.style.overflow = "hidden"; // important și body uneori
 
  
const logo_inceput2 = document.getElementById("logomob");
 const full3=document.getElementById("fullscreen-tlf");

  const halfR2=document.getElementsByClassName("right-half-tlf")[0];
   const halfl2=document.getElementsByClassName("left-half-tlf")[0];
  const linie2=document.getElementsByClassName("line-orizontala")[0];
 const logodiv=document.getElementById("logocentratmob");
const backgroundsvg=document.getElementById("backmaintlf");
const backsvg2=document.getElementById("totsvg2");

   setTimeout(()=>{
     full3.style.display = "block";         // fă-l vizibil
  void full3.offsetWidth;                // forțează browserul să "vadă" starea inițială
  full3.classList.add("apare");          // adaugă clasa cu tranziție
    backgroundsvg.style.backgroundColor="black";
    backsvg2.style.backgroundColor="black";
    // Asta face fade-in
backgroundsvg.classList.add("apare");
document.body.style.backgroundColor = "black";





  },1600);

  setTimeout(()=>{

  halfR2.style.display = "none";
  halfl2.style.display = "none";
  linie2.style.display = "none";
  logo_inceput2.style.display = "none";
  logodiv.style.display = "none";
  },2000);




setTimeout(() => {
  let triggered = false;
  ["touchstart", "touchmove","click"].forEach(eventType => {
    if (eventType === "touchstart") {
      document.getElementById("adouapoza")?.addEventListener("touchstart", handler, { once: true });
    } else {
      window.addEventListener("touchmove", handler, { passive: true });
    }
  });


  function handler() {
    if (triggered) return; // ca să nu se repete
    triggered = true;
    document.body.style.backgroundColor = "white";
       const curgere = document.getElementById("curgerepetlf");
    const totsvg3 = document.getElementById("totsvg2");
const lichidindex=document.getElementById("lichiddesus");
lichidindex.style.zIndex="100000";
 
    totsvg3.style.backgroundColor = "white";


    gsap.to(curgere, {
      y: 0,
      duration: 1.7,
      ease: "power2.out",
      onComplete: () => {
        gsap.to(totsvg3, {
          opacity: 0,
          duration: 0.8,
        });
      }
    });

    setTimeout(() => {
      const logocentratmob = document.getElementById("logocentratmob");
      document.documentElement.style.overflowY = "auto";
       document.body.style.overflowY = "auto";
        const sh1tlf = document.getElementById("sh1_tlf");
  const sh2tlf = document.getElementById("sh2_tlf");
  
      totsvg3.style.display = "none";
      logocentratmob.style.display = "none";
  ScrollTrigger.refresh();
      // 🔥 ANIMAȚIA FRUMOASĂ DE APARIȚIE:
      const header = document.querySelector(".headertlf");
      const logo = document.getElementById("logo_headertlf");
      const meniu = document.getElementById("meniutlf");
      const pf1tlfb=document.getElementById("pf1tlf");
      gsap.fromTo(header, { y: -100, opacity: 0 }, { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out" 
      });

      gsap.fromTo(logo, { scale: 0, opacity: 0 }, { 
        scale: 1, 
        opacity: 1, 
        duration: 1, 
        ease: "back.out(1.7)", 
        delay: 0.2 
      });

      gsap.fromTo(meniu, { y: 50, opacity: 0 }, { 
        y: 0, 
        opacity: 1, 
        duration: 1, 
        ease: "power2.out", 
        delay: 0.4 
      });
 gsap.fromTo(sh1tlf, 
    { y: 60, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1.4, ease: "power2.out" }
  );
   gsap.fromTo(pf1tlfb, 
    { y: 60, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1.4, ease: "power2.out" }
  );

  gsap.fromTo(sh2tlf, 
    { y: 60, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1.4, ease: "power2.out", delay: 0.2 }
  );



    }, 1000);
  }

  document.getElementById("primapoza")?.addEventListener("click", () => {
  if (!triggered) {
    handler();

    const interval = setInterval(() => {
      document.body.style.backgroundColor="black";
            const target = document.getElementById("partea6");
const offset = target.getBoundingClientRect().top + window.scrollY;

      
      const logo_vizibil=document.getElementById("headertlfmicro");
      const scrismicro1=document.getElementById("mic1tlf");
      const scrismicro2=document.getElementById("mic2tlf");
      if (target && target.offsetHeight > 0) {
// Dezactivezi scroll smooth înainte de teleport
document.documentElement.style.scrollBehavior = "auto";

window.scrollTo(0, offset);

// Activezi iar scroll smooth (dacă vrei)
document.documentElement.style.scrollBehavior = "";

        clearInterval(interval);
      }
      gsap.to(logo_vizibil,{
          opacity:1,
          duration:0.2,
          ease:"power2.out",

      });
       gsap.fromTo(scrismicro1, 
    { y: 60, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1.4, ease: "power2.out" }
  );

  gsap.fromTo(scrismicro2, 
    { y: 60, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1.4, ease: "power2.out", delay: 0.2 }
  );



       setTimeout(() => logo_vizibil.style.opacity=0, 10000);

    }, 1000);



    setTimeout(() => clearInterval(interval), 3000);
  }
}, { once: true });

}, 2200);



  gsap.registerPlugin(ScrollTrigger);

const cerculet = document.getElementById("cerculetheadtlf");
const cerculet2=document.getElementById("cerculetheadtlf2");
const overlay = document.getElementById("overlaymenu");
const closebtn = document.getElementById("closebtn");



const logoMenu = document.getElementById("logo_meniul");
const meniuh1 = document.querySelectorAll("#menulist h1");

cerculet.addEventListener("click", () => {
  overlay.style.display = "flex";

  gsap.fromTo(overlay, { opacity: 0 }, { 
    opacity: 1, 
    duration: 0.8, 
    ease: "power2.out",
     onStart: () => {
      // Resetăm logo și meniul înainte de animație
      gsap.set(logoMenu, { opacity: 0, y: 50,x:-17, });
      gsap.set(meniuh1, { opacity: 0, y: 50 });
    },
    onComplete: () => {
      // Animatie logo overlay
    gsap.to(logoMenu, {
  y: 0,
  opacity: 1,
  duration: 1,
  ease: "power2.out"
});

gsap.to(meniuh1, {
  y: 0,
  opacity: 1,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out"
});

    }
  });
});

cerculet2.addEventListener("click", () => {
  overlay.style.display = "flex";

  gsap.fromTo(overlay, { opacity: 0 }, { 
    opacity: 1, 
    duration: 0.8, 
    ease: "power2.out",
     onStart: () => {
      // Resetăm logo și meniul înainte de animație
      gsap.set(logoMenu, { opacity: 0, y: 50,x:-17, });
      gsap.set(meniuh1, { opacity: 0, y: 50 });
    },
    onComplete: () => {
      // Animatie logo overlay
    gsap.to(logoMenu, {
  y: 0,
  opacity: 1,
  duration: 1,
  ease: "power2.out"
});

gsap.to(meniuh1, {
  y: 0,
  opacity: 1,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out"
});

    }
  });
});



closebtn.addEventListener("click", () => {
  gsap.to(overlay, {
    opacity: 0,
    duration: 0.8,
    ease: "power2.inOut",
    onComplete: () => {
      overlay.style.display = "none";
    }
  });
});

const pozaparalax=document.getElementById("pf1tlf");
gsap.set(pozaparalax, {
y:20,
    scale: 1.1
  });
gsap.to(pozaparalax,{
y:-40,
scale:1,
 ease: "sine.inOut", // Easing-ul se pune aic
scrollTrigger:{
trigger:"#sh2_tlf",
start:"top 50%",

scrub:2,

}



});

const pozaparalax2=document.getElementById("primaimg");
const pozaparalax3=document.getElementById("adouapoza");
const pozaparalax4=document.getElementById("a3apoza");
const scris1=document.getElementById("at");
const scris2=document.getElementById("lf");
const scris3=document.getElementById("dt");
const scris4=document.getElementById("textLook");
const element5=document.getElementById("programare2");


gsap.set(pozaparalax2, {
y:20,
    scale: 1.2
  });
gsap.to(pozaparalax2,{
y:-60,
scale:1,
 ease: "sine.inOut", // Easing-ul se pune aic
scrollTrigger:{
trigger:"#primaimg",
start:"top center",

scrub:2,


}});
gsap.set(scris1,{
  y:20,opacity:0,
})
gsap.to(scris1,{
  y:0,
opacity:1,
 ease: "sine.inOut", // Easing-ul se pune aic
scrollTrigger:{
trigger:"#primaimg",
start:"top center",

}
});


gsap.set(pozaparalax3, {
y:20,
    scale: 1.2
  });
gsap.to(pozaparalax3,{
y:-60,
scale:1,
 ease: "sine.inOut", // Easing-ul se pune aic
scrollTrigger:{
trigger:"#adouapoza",
start:"top center",

scrub:2,


}});
gsap.set(scris2,{
  y:20,opacity:0,
})
gsap.to(scris2,{
  y:0,
opacity:1,
 ease: "sine.inOut", // Easing-ul se pune aic
scrollTrigger:{
trigger:"#adouapoza",
start:"top center",

}
});








gsap.set(pozaparalax4, {
y:20,
    scale: 1.2
  });
gsap.to(pozaparalax4,{
y:-60,
scale:1,
 ease: "sine.inOut", // Easing-ul se pune aic
scrollTrigger:{
trigger:pozaparalax4,
start:"top center",

scrub:2,


}});
gsap.set(scris3,{
  y:20,opacity:0,
})
gsap.to(scris3,{
  y:0,
opacity:1,
 ease: "sine.inOut", // Easing-ul se pune aic
scrollTrigger:{
trigger:pozaparalax4,
start:"top center",

}
});




gsap.set(scris4,{
  y:20,opacity:0,
})
gsap.to(scris4,{
  y:0,
opacity:1,
 ease: "sine.inOut", // Easing-ul se pune aic
scrollTrigger:{
trigger:"#lookuri",
start:"top center",

}
});

gsap.set(element5,{
  y:20,opacity:0,
})
gsap.to(element5,{
  y:0,
opacity:1,
 ease: "sine.inOut", // Easing-ul se pune aic
scrollTrigger:{
trigger:".banner",
start:"top center+200",

}
});


gsap.registerPlugin(ScrollTrigger);





const slider = document.querySelector('.slider');
const sliderItems = slider.querySelectorAll('.item');
const numSlides = sliderItems.length;
const degreePerSlide = 360 / numSlides;
let totalRotation = 0;
let startX = null;
const geneNames = [
  "Gene 3D",           // corespunde la .item 1 (3d.webp)
  "Gene 2D",           // .item 2 (2d.webp)
  "Gene 1D",           // .item 3 (1d.webp)
  "Eye Liner",         // .item 4 (eye.webp)
  "Cat Eye Kim K."     // .item 5 (cat_eye_kim_kardashian.webp)
];

// POZITIE pentru denumire
const denumireBox = document.getElementById('Denumire');

slider.style.transform = `perspective(1000px) rotateY(0deg)`;
updateItemsBrightness(getCenterIndex());

// --- SWIPE logic pe mobil ---
slider.addEventListener('touchstart', function(e) {
  if (e.touches.length === 1) startX = e.touches[0].clientX;
  document.body.style.overflowY = "hidden"; // blochezi DOAR pe Y
}, { passive: true });


slider.addEventListener('touchend', function(e) {
  if (startX === null) return;
  let endX = e.changedTouches[0].clientX;
  let dx = endX - startX;
  if (Math.abs(dx) > 40) {
    if (dx < 0) {
      totalRotation -= degreePerSlide;
    } else {
      totalRotation += degreePerSlide;
    }
    gsap.to(slider, {
      duration: 0.6,
      rotateY: totalRotation,
      ease: "power3.inOut",
      onComplete: function() {
        const centerIdx = getCenterIndex();
        updateItemsBrightness(centerIdx);
        updateDenumire(centerIdx); // ← actualizează textul când schimbă poza!
      }
    });
  }
  
    document.body.style.overflowY = ""; // readuce scrollul pe Y la normal
  startX = null;
});
slider.addEventListener('touchcancel', function(e) {
  document.body.style.overflowY = ""; // dacă userul anulează swipe-ul
});
// -- INIȚIAL: setezi și denumirea corectă --
updateDenumire(getCenterIndex());

// --- Index central ---
function getCenterIndex() {
  let idx = Math.round(-totalRotation / degreePerSlide) % numSlides;
  if (idx < 0) idx += numSlides;
  return idx;
}

// --- Brightness ---
function updateItemsBrightness(centerIdx) {
  sliderItems.forEach((item, i) => {
    gsap.to(item, {
      filter: i === centerIdx ? "brightness(1)" : "brightness(0.7)",
      duration: 0.5,
      ease: "power2.out"
    });
  });
}

// --- FUNCTIE DENUMIRE ---
function updateDenumire(centerIdx) {
  // 1. Animație OUT
  gsap.to(denumireBox, {
    opacity: 0,
    y: -20,
    duration: 0.3,
    ease: "power2.in",
    onComplete: () => {
      // 2. Schimbi textul după OUT
      denumireBox.innerHTML = geneNames[centerIdx];
      // 3. Pui denumirea mai jos și invizibilă, apoi animezi IN
      gsap.set(denumireBox, { y: 20 });
      gsap.to(denumireBox, {
        opacity: 1,
        y: 0,
        duration: 0.4,
        ease: "power2.out"
      });
    }
  });
}


const micropigDiv = document.getElementById("partea6");
const pozeleDiv = document.getElementById("partea5intermediara");
const body = document.body;
let activated = false;
let ticking = false;

function checkPosition() {
  const rect = pozeleDiv.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const divMid = rect.top + rect.height / 2;

  if (divMid <= windowHeight / 2 && !activated) {
    gsap.to([micropigDiv, pozeleDiv, body], {
      backgroundColor: "#000",
      color: "#fff",
      duration: 1.2,
      overwrite: "auto"
    });
    activated = true;
  } else if (divMid > windowHeight / 2 && activated) {
    gsap.to([micropigDiv, pozeleDiv, body], {
      backgroundColor: "#fff",
      color: "#000",
      duration: 1.2,
      overwrite: "auto"
    });
    activated = false;
  }
  ticking = false;
}

function fireCheck() {
  if (!ticking) {
    requestAnimationFrame(checkPosition);
    ticking = true;
  }
}

// Ascultă și scroll, și touchmove (important pentru tlf)
window.addEventListener("scroll", fireCheck, {passive:true});
window.addEventListener("touchmove", fireCheck, {passive:true});
window.addEventListener("resize", checkPosition);

// Apel inițial:
checkPosition();



const servbuze = document.getElementById("servbuze");
const servsprn = document.getElementById("servsprancene");
const switchservh1 = document.getElementById("switchserv");
const butonswitch = document.getElementById("switchulserviciilor");

let showSprancene = false;

// Inițial: doar buze vizibil
servbuze.classList.add("active");
servsprn.style.opacity = 0;
servsprn.style.transform = "scale(0.98) translateY(40px)";

butonswitch.addEventListener("click", () => {
  if (!showSprancene) {
    // Animație out buze
    gsap.to(servbuze, {
      opacity: 0,
      y: 40,
      scale: 0.98,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => {
        servbuze.classList.remove("active");
        servsprn.classList.add("active");
        // Animație in sprancene
        gsap.fromTo(
          servsprn,
          { opacity: 0, y: 40, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power2.out" }
        );
      }
    });
    // Text animat
    gsap.to(switchservh1, {
      opacity: 0,
      y: -15,
      duration: 0.2,
      onComplete: () => {
        switchservh1.innerHTML = "SERVICII BUZE";
        gsap.fromTo(
          switchservh1,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.33, ease: "power2.out" }
        );
      }
    });
    showSprancene = true;
  } else {
    // Animație out sprancene
    gsap.to(servsprn, {
      opacity: 0,
      y: 40,
      scale: 0.98,
      duration: 0.35,
      ease: "power2.in",
      onComplete: () => {
        servsprn.classList.remove("active");
        servbuze.classList.add("active");
        gsap.fromTo(
          servbuze,
          { opacity: 0, y: 40, scale: 0.98 },
          { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "power2.out" }
        );
      }
    });
    gsap.to(switchservh1, {
      opacity: 0,
      y: -15,
      duration: 0.2,
      onComplete: () => {
        switchservh1.innerHTML = "SERVICII SPRANCENE";
        gsap.fromTo(
          switchservh1,
          { opacity: 0, y: 15 },
          { opacity: 1, y: 0, duration: 0.33, ease: "power2.out" }
        );
      }
    });
    showSprancene = false;
  }
});
butonswitch.addEventListener('touchstart', () => {
  gsap.to(butonswitch, { scale: 0.95, duration: 0.10 });
});
butonswitch.addEventListener('touchend', () => {
  gsap.to(butonswitch, { scale: 1, duration: 0.22, ease: "elastic.out(1, 0.5)" });
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
      trigger: "#socialmedia",
  start: "top bottom",
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
start: "top bottom",       // când partea de jos a elementului ajunge la baza viewportului
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
start: "top bottom",       // când partea de jos a elementului ajunge la baza viewportului  
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
start: "top bottom",       // când partea de jos a elementului ajunge la baza viewportului   
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
start: "top bottom",       // când partea de jos a elementului ajunge la baza viewportului   
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
start: "top bottom",       // când partea de jos a elementului ajunge la baza viewportului  
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
start: "top bottom",       // când partea de jos a elementului ajunge la baza viewportului  
      toggleActions: "play none none none",// animat o singură dată,
 
    }

});



let lastScroll = window.scrollY;
const headerMobil = document.getElementById("headermobil");
const headerTlf = document.querySelector(".headertlf");
const logoMobil = document.getElementById("logo_miscator");
const sageata=document.getElementById("arrow-up");
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  const headerRect = headerTlf.getBoundingClientRect();
  const distance = Math.abs(headerRect.top);

  if (currentScroll < lastScroll && distance > window.innerHeight * 0.3) {
    headerMobil.style.opacity = 1;
    headerMobil.style.pointerEvents = "auto";

    const bgColor = window.getComputedStyle(document.body).backgroundColor;
    const isWhiteBg = bgColor.includes("255, 255, 255");

    if (isWhiteBg) {
      logoMobil.src = "Vectori/logo-negru.svg";
    
     sageata.style.borderBottomColor = "black"; // schimbă culoarea în roșu
    } else {
      logoMobil.src = "Vectori/logo-alb.svg";
     
     sageata.style.borderBottomColor = "white";
    }
  } else {
    headerMobil.style.opacity = 0;
    headerMobil.style.pointerEvents = "none";
  }

  lastScroll = currentScroll;
});



// ÎNCHIDERE MENIU — rămâne exact cum ai deja (closebtn e dej

//MICRO, ERA PUS IN MOBIL2
    gsap.registerPlugin(ScrollTrigger);
    const lumina=document.getElementById("lumina");
    const pozaculumina=document.getElementById("pozafata");
    gsap.fromTo(lumina,{
        opacity:0,
    },{
        opacity:1,
        scrollTrigger:{
            trigger:"#lumina",
            start:"top 30%",
            end:"bottom 50%",
            scrub:true,
          

        }
    });

    const micropoza1=document.getElementById("micro3editat");
    const micropoza2=document.getElementById("microspranceneedit");
    const detdif=document.getElementById("detaliilefacdif");

 gsap.set(micropoza1, { y: 20, opacity: 0 });

   gsap.to(micropoza1,{
    opacity:1,
    y:0,
   ease: "power3.out",
   duration:2,
    scrollTrigger:{
        trigger:micropoza1,
        start:"top 50%",
   


    }
   });
    gsap.set(micropoza2, { y: 20, opacity: 0 });

   gsap.to(micropoza2,{
    opacity:1,
    y:0,
     duration:2,
   ease: "power3.out",
    scrollTrigger:{
        trigger:detdif,
        start:"top 50%",
  


    }
   });
    gsap.set(detdif, { y: 20, opacity: 0 });

   gsap.to(detdif,{
    opacity:1,
    y:0,
     duration:2,
   ease: "power3.out",
    scrollTrigger:{
        trigger:micropoza1,
        start:"top 20%",
        


    }
   });

});//load








}
else{
    window.location.href = "desktop.html";
}
