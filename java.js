function initDesktop() {
  console.log("Incarc site-ul de desktop");
let litere;
let lenis; // doar declarăm

async function incarcaSVG() {
  // SVG #1 – background principal
  const responseIntro = await fetch("Vectori/background-principal2.svg");
  const svgIntro = await responseIntro.text();
  document.getElementById("backmain").innerHTML = svgIntro;

  const curgere = document.getElementById("curgere");
  
  const pf2 = document.getElementById("pf2");
  const micropigmentation = document.getElementById("Micropigmentation");
  const pozapus = document.getElementById("pozapus");
  const lash = document.getElementById("Lash_extensions");

  if (curgere) {
    curgere.style.transform = "translateY(-150vw)";
  }

  if (pf2 && micropigmentation && lash) {
    pf2.addEventListener("mouseenter", () => {
      gsap.to(micropigmentation, {
        filter: "drop-shadow(-8px 14px 3px rgba(20, 20, 20, 0.89))",
        scale: 1.1,
        transformOrigin: "center center",
        duration: 1,
        ease: "power3.out"
      });

      gsap.to(lash, {
        fill: "#5f5f5f",
        duration: 0.5,
        ease: "power3.out"
      });
    });

    pf2.addEventListener("mouseleave", () => {
      gsap.to(micropigmentation, {
        filter: "drop-shadow(0px 0px 0px rgba(20, 20, 20, 0.89))",
        scale: 1,
        duration: 1,
        ease: "power3.inOut"
      });

      gsap.to(lash, {
        fill: "#ffffff",
        duration: 0.5,
        ease: "power3.inOut"
      });
    });
  }

  if (pozapus && lash && micropigmentation) {
    pozapus.addEventListener("mouseenter", () => {
      gsap.to(lash, {
        filter: "drop-shadow(-8px 14px 3px rgba(20, 20, 20, 0.89))",
        scale: 1.1,
        transformOrigin: "center center",
        duration: 1,
        ease: "power3.out"
      });

      gsap.to(micropigmentation, {
        fill: "#5f5f5f",
        duration: 0.5,
        ease: "power3.out"
      });
    });

    pozapus.addEventListener("mouseleave", () => {
      gsap.to(lash, {
        filter: "drop-shadow(0px 0px 0px rgba(20, 20, 20, 0.89))",
        scale: 1,
        duration: 1,
        ease: "power3.inOut"
      });

      gsap.to(micropigmentation, {
        fill: "#ffffff",
        duration: 0.5,
        ease: "power3.inOut"
      });
    });
  }

  const scrolSus = document.getElementById("scrolsus");
  const scrolJos = document.getElementById("scroljos");

  if (scrolSus && scrolJos) {
    gsap.to(scrolSus, {
      y: 15,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });

    gsap.to(scrolJos, {
      y: 15,
      duration: 1,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut"
    });
  }

  // Așteaptă 3 secunde după ce primul SVG e injectat
  await new Promise(resolve => setTimeout(resolve, 3000));

  // SVG #2 – mentiune
  const responseMentiune = await fetch("Vectori/mentiune.svg");
  const svgMentiune = await responseMentiune.text();
  document.getElementById("mentiune").innerHTML = svgMentiune;

  const cercuri = [
    { id: "cerc1", y: -140, start: "top 85%", end: "top 50%" },
    { id: "cerc2", y: -60, start: "top 90%", end: "top 40%" },
    { id: "cerc3", y: -60, start: "top 95%", end: "top 30%" },
    { id: "cerc4", y: -110, start: "top 92%", end: "top 35%" },
    { id: "cerc5", y: -50, start: "top 88%", end: "top 42%" },
    { id: "cerc6", y: -90, start: "top 93%", end: "top 33%" },
    { id: "cerc7", y: -40, start: "top 89%", end: "top 39%" },
  ];

  const trz = document.getElementById("mentiune");

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

 // Așteaptă 3 secunde după ce al doilea SVG e injectat
  await new Promise(resolve => setTimeout(resolve, 1500));


  const responseBila = await fetch("Vectori/partea2.svg");
  const svgBila = await responseBila.text();
  document.getElementById("bila").innerHTML = svgBila;

  const responseBila2 = await fetch("Vectori/bila2.svg");
  const svgBila2 = await responseBila2.text();
  document.getElementById("bila2").innerHTML = svgBila2;


   const responseBila3 = await fetch("Vectori/bila3.svg");
  const svgBila3 = await responseBila3.text();
  document.getElementById("bila3").innerHTML = svgBila3;

  gsap.registerPlugin(ScrollTrigger);


    requestAnimationFrame(() => {
// Bila 1 – din dreapta
gsap.fromTo("#bila", 
  { x: 200, opacity: 0 }, 
  { 
    x: 0, opacity: 1, duration: 1.3, ease: "power3.out",filter:" drop-shadow(-17px 8px 15px rgba(0, 0, 0, 0.52))",
    scrollTrigger: {
      trigger: "#bila",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
);




   
// Bila 2 – din stânga
gsap.fromTo("#bila2", 
  { x: -200, opacity: 0 }, 
  { 
    x: 0, opacity: 1, duration: 1.3, ease: "power3.out",filter:"drop-shadow(17px 16px 18px rgba(0, 0, 0, 0.52))",
    scrollTrigger: {
      trigger: "#bila2",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
);





// Bila 3 – din dreapta
gsap.fromTo("#bila3", 
  { x: 200, opacity: 0 }, 
  { 
    x: 0, opacity: 1, duration: 1.3, ease: "power3.out",filter:" drop-shadow(-17px 8px 15px rgba(0, 0, 0, 0.52))",
    scrollTrigger: {
      trigger: "#bila3",
      start: "top 80%",
      toggleActions: "play none none none"
    }
  }
);

}); // ← AICI e închiderea


// Așteaptă 3 secunde după ce al doilea SVG e injectat
  await new Promise(resolve => setTimeout(resolve, 1500));

  const responseCele2poze = await fetch("Vectori/cele2poze.svg");
  const svgCele2 = await responseCele2poze.text();
  document.getElementById("pozeleceledoua").innerHTML = svgCele2;
  requestAnimationFrame(() => {
  gsap.registerPlugin(ScrollTrigger);

  // Ochi – urcă ușor
  gsap.to("#ochi", {
    y: -150, // urcă 30px
    ease: "sine.inOut",
    scrollTrigger: {
      trigger: "#ochi",
      start: "top 90%",
      end: "bottom 10%",
      scrub: true,
      
    }
  });

  // Buze – coboară ușor
  gsap.to("#buze", {
    y: 150, // coboară 30px
    ease: "sine.inOut",
    scrollTrigger: {
      trigger: "#buze",
      start: "top 90%",
      end: "bottom 10%",
      scrub: true,
       
    }
  });
});


}






  




window.addEventListener("load", () => {
incarcaSVG();




    // deblochează scroll-ul
    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden"; // important și body uneori
const logo_inceput = document.getElementById("logo");
 const full=document.getElementsByClassName("fullscreen")[0];
 full.style.display="none"
  const halfR=document.getElementsByClassName("right-half")[0];
   const halfl=document.getElementsByClassName("left-half")[0];
  const linie=document.getElementsByClassName("line-wrapper")[0];

   setTimeout(()=>{
     full.style.display = "block";         // fă-l vizibil
  void full.offsetWidth;                // forțează browserul să "vadă" starea inițială
  full.classList.add("apare");          // adaugă clasa cu tranziție



  },2500);


setTimeout(()=>{
  halfR.style.display = "none";
  halfl.style.display = "none";
  linie.style.display = "none";
  logo_inceput.style.display = "none";
  },4000);

});




//TIMEOUT CA SA SE STEARGA SVG UL SA INTRE PE SITE
setTimeout(()=>{

let triggered = false;
["wheel", "click"].forEach(eventType => {
  if (eventType === "click") {
    document.getElementById("pf2")?.addEventListener("click", handler, { once: true });
  } else {
    window.addEventListener("wheel", handler, { passive: true });
  }
});


const curgere = document.getElementById("curgere");

document.getElementById("pozapus")?.addEventListener("click", () => {
  if (!triggered) {
    handler();

    const interval = setInterval(() => {
      const target = document.querySelector(".micropigmentare_div");
const offset = target.getBoundingClientRect().top + window.scrollY;


      const logo_vizibil=document.getElementById("logo_header2");
      const scrismicro1=document.getElementById("mic1");
      const scrismicro2=document.getElementById("mic2");
      if (target && target.offsetHeight > 0) {
      window.scrollTo({ top: offset + 200, behavior: "auto" }); // +200px mai jos

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



       setTimeout(() => logo_vizibil.style.opacity=0, 6000);

    }, 1500);



    setTimeout(() => clearInterval(interval), 3000);
  }
}, { once: true });


function handler(){
  if (!triggered) {
    const svg = document.getElementsByClassName("totsvg")[0];
    const logo_div = document.getElementById("logo_centrat");
    const logo_inceput = document.getElementById("logo");
    const micro = document.getElementById("micro_scris");


    const fullscreen = document.querySelector(".fullscreen");
      
if (fullscreen) {
  
  gsap.to(curgere, {
    y:0,
  
    duration: 1.5,
    ease: "power2.out",
    
  });
  gsap.to(fullscreen, {
    backgroundColor: "#ffffff",
  duration: 0.2,             // ↗️ durată mai lungă pentru efect calm
  ease: "expo.inOut",        // ↘️ easing moale, cu început și final fluid
    
  });
}


let lenis = null;



  // Blochează scrollul imediat după evenimentul wheel (opțional)
  document.documentElement.style.overflowY = "hidden";
  document.body.style.overflowY = "hidden";

 setTimeout(() => {
    // Deblochează scrollul
    document.documentElement.style.overflowY = "auto";
    document.body.style.overflowY = "auto";

    // Inițializează Lenis scroll
    lenis = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      smoothTouch: true
    });

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        return arguments.length ? lenis.scrollTo(value) : window.scrollY;
      },
      getBoundingClientRect() {
        return {
          top: 0,
          left: 0,
          width: window.innerWidth,
          height: window.innerHeight
        };
      },
      fixedMarkers: true
    });

    ScrollTrigger.defaults({ scroller: document.body });

    lenis.on("scroll", ScrollTrigger.update);

    requestAnimationFrame(function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    });

    ScrollTrigger.refresh();
  },1500); // 🔁 întârziere după wheel

// La final, ascunde și întreg div-ul cu clasa totsvg (care conține tot SVG-ul)
const totsvg = document.querySelector(".totsvg");
if (totsvg) {
  gsap.to(totsvg, {
    opacity: 0,
    duration: 1.5,
    delay: 1.5,
    ease: "sine.inOut",
    onComplete: () => {
      totsvg.style.visibility = "hidden";
      totsvg.style.pointerEvents = "none";
    }
  });
}


  // SVG dispare
  if (svg) {
    gsap.to(svg, {
      opacity: 0,
      duration: 1.5,
      ease: "power2.inOut"
    });
    svg.style.position = "absolute";
   
  }

 

 

 

 const logo_svg=document.getElementById("logo_svg");

  logo_svg.style.opacity=0;
  setTimeout(() => {
  const logo_header = document.getElementById("logo_header");
  logo_header.style.opacity = 1;

  const sh1 = document.getElementById("sh1");
  const sh2 = document.getElementById("sh2");
    const sh3=document.getElementById("galhead");
    const sh4=document.getElementById("servhead");
    const sh5=document.getElementById("cerculethead");
  gsap.fromTo(sh1, 
    { y: 60, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1.4, ease: "power2.out" }
  );

  gsap.fromTo(sh2, 
    { y: 60, opacity: 0 }, 
    { y: 0, opacity: 1, duration: 1.4, ease: "power2.out", delay: 0.2 }
  );
 gsap.fromTo(sh3, 
    { x: -60, opacity: 0 }, 
    { x: 0, opacity: 1, duration: 0.7, ease: "power2.out", delay: 0.2 }
  );
   gsap.fromTo(sh4, 
    { x: -60, opacity: 0 }, 
    { x: 0, opacity: 1, duration: 0.7, ease: "power2.out", delay: 0.2 }
  );
   gsap.fromTo(sh5, 
    { x: 60, opacity: 0 }, 
    { x: 0, opacity: 1, duration: 0.7, ease: "power2.out", delay: 0.2 }
  );
 
}, 1500);


    

    triggered = true;
  }
  ScrollTrigger.refresh();
}





  },4200);//DE MODIFICAT !!!!!!!!!!!!!!!!!!!!!!!!!
  














document.addEventListener("DOMContentLoaded", () => {
 const pf1 = document.getElementById("pf1");
if (!pf1) return;

let targetX = 0, targetY = 0;
let currentX = 0, currentY = 0;
let animationFrameId = null;
let active = false;

function animate() {
  currentX += (targetX - currentX) * 0.08;
  currentY += (targetY - currentY) * 0.08;

  pf1.style.transform = `
    perspective(800px)
    rotateX(${currentY}deg)
    rotateY(${currentX}deg)
  `;

  animationFrameId = requestAnimationFrame(animate);
}

function startTracking() {
  if (active) return;
  active = true;

  document.addEventListener("mousemove", onMouseMove);
  animate();
}

function stopTracking() {
  if (!active) return;
  active = false;

  cancelAnimationFrame(animationFrameId);
  document.removeEventListener("mousemove", onMouseMove);
}

function onMouseMove(e) {
  const { innerWidth, innerHeight } = window;
  const x = (e.clientX / innerWidth - 0.5) * -2;
  const y = (e.clientY / innerHeight - 0.5) * -2;

  targetX = -x * 7;
  targetY = y * 7;
}

// 📌 Activăm doar când intră în viewport
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      startTracking();
    } else {
      stopTracking();
    }
  });
}, {
  threshold: 0.5 // minim 50% vizibil
});

observer.observe(pf1);

});


function easeOutQuad(t) {
  return t * (2 - t);
}


 function fireConfetti() {
  var count = 200;
  var defaults = {
    origin: { y: 1 }, // confetti pornește din marginea de jos
    colors: ['#000000', '#D4AF37', '#B76E79', '#F5F5F5', '#C0C0C0'] // negru, gold, rose gold, alb, argintiu
  };

  function fire(particleRatio, opts) {
    confetti({
      ...defaults,
      ...opts,
      particleCount: Math.floor(count * particleRatio)
    });
  }

  fire(0.25, {
    spread: 26,
    startVelocity: 55,
  });
  fire(0.2, {
    spread: 60,
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45,
  });
}


function startCounterEased(el, target =1000, duration = 2000) {
  let start = null;
  let lastValue = -1;

  function animate(timestamp) {
    if (!start) start = timestamp;
    const elapsed = timestamp - start;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuad(progress);

    const currentValue = Math.floor(easedProgress * target);

    if (currentValue !== lastValue) {
      el.textContent = currentValue;
      lastValue = currentValue;
    }

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      el.textContent = target;
      fireConfetti(); // 🎉 declanșăm când ajunge la final
    }
  }

  requestAnimationFrame(animate);
}

document.addEventListener("DOMContentLoaded", () => {
  const cout = document.getElementById("cout");
  if (!cout) return;

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        startCounterEased(cout, 1000, 2000);
        obs.unobserve(cout);
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(cout);
});



document.addEventListener("DOMContentLoaded", () => {
  const detaliu1 = document.getElementById("detaliu1");
  const detaliu2 = document.getElementById("detaliu2");
  const imaginepart = document.getElementById("imaginepart");
  const pf1 = document.getElementById("pf1");
  if (!detaliu1 || !detaliu2 || !imaginepart || !pf1) return;

  // Inițial: inner shadow, fără scale
  detaliu1.style.boxShadow = "inset 5px 5px 22px rgba(0,0,0,0.35)";
  detaliu1.style.transform = "scale(1)";
  detaliu1.style.transition = "none";

  detaliu2.style.boxShadow = "inset 5px 5px 22px rgba(0,0,0,0.35)";
  detaliu2.style.transform = "scale(1)";
  detaliu2.style.transition = "none";

  imaginepart.style.transform = "scale(0.8)";
  imaginepart.style.transition = "none";
  pf1.style.filter = "none";

  let started = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          started = true;

          let finished = 0;
          function finish() {
            finished++;
            if (finished === 2) {
              gsap.to(imaginepart, {
                scale: 1,
                duration: 0.7,
                ease: "expo.out"
              });
              gsap.to(pf1, {
                filter: "drop-shadow(5px 5px 10px #000000)",
                duration: 0.7,
                ease: "power2.out"
              });
            }
          }

          // Acum: fade-out la inner shadow → fade-in la drop shadow 3D
          const tl1 = gsap.timeline({ onComplete: finish });
          tl1.to(detaliu1, {
            boxShadow: "inset 5px 5px 22px rgba(0,0,0,0)",
            transform: "scale(1.01)",
            duration: 0.7,
            ease: "expo.inOut"
          });
          tl1.to(detaliu1, {
            boxShadow: "-15px 12px 20px 2px rgba(0, 0, 0, 0.37)",
            transform: "scale(1.03)",
            duration: 0.8,
            ease: "expo.inOut"
          });

          const tl2 = gsap.timeline({ onComplete: finish });
          tl2.to(detaliu2, {
            boxShadow: "inset 5px 5px 22px rgba(0,0,0,0)",
            transform: "scale(1.01)",
            duration: 0.7,
            ease: "expo.inOut"
          });
          tl2.to(detaliu2, {
            boxShadow: "-15px 12px 20px 2px rgba(0, 0, 0, 0.37)",
            transform: "scale(1.03)",
            duration: 0.8,
            ease: "expo.inOut"
          });
        }
      });
    },
    { threshold: 0.7 }
  );
  observer.observe(pf1);
});









 gsap.registerPlugin(ScrollTrigger);

        document.addEventListener("DOMContentLoaded", () => {
            const element = document.getElementById("px1");
           const trig=document.getElementById("img_paralax")
             const element2 = document.getElementById("px2");
           const trig2=document.getElementById("divpx1")
            const element3 = document.getElementById("px3");
         

gsap.set(element, {
    y: "10%",
    scale: 1.2
  });

            // Crează animația
            const animation = gsap.to(element, {
                y: -50, // Final position (normal)
           scale: 1,        // Scalare până la 80%
 
                 ease: "sine.out", // Easing mai lin decât power2.out
                
                // Configurare ScrollTrigger
                scrollTrigger: {
                    trigger: trig,
                    start: "top top", // Când partea de sus a elementului atinge partea de jos a viewport-ului
                   end: "bottom top",
                     scrub: 1.5,          // Valoare mai mică = mai puțină rezistență
               
                    
                }
            });

gsap.set(element2, {
   
    scale: 1.2
  });
            // Crează animația
            const animation2 = gsap.to(element2, {
                y: -10, // Final position (normal)
              scale: 1,        // Scalare până la 80%
 
                 ease: "sine.out", // Easing mai lin decât power2.out
                
                // Configurare ScrollTrigger
                scrollTrigger: {
                    trigger: trig,
                    start: "5% top", // Când partea de sus a elementului atinge partea de jos a viewport-ului
             
                     scrub: 1.5,          // Valoare mai mică = mai puțină rezistență
                   
                }
            });


gsap.set(element3, {
    y: "2%",
    scale: 1.2
  });
            // Crează animația
            const animation3 = gsap.to(element3, {
                y: -5, // Final position (normal)
           scale: 1,        // Scalare până la 80%
 
                 ease: "sine.out", // Easing mai lin decât power2.out
                
                // Configurare ScrollTrigger
                scrollTrigger: {
                    trigger: trig,
                    start: "50% top", // Când partea de sus a elementului atinge partea de jos a viewport-ului

                     scrub: 1.5,          // Valoare mai mică = mai puțină rezistență
                 
                    
                }
            });



        });





        
const floatingItemsConfig = [
  { id: 'for2', amplitude: 1.5, speed: 0.002, rotationSpeed: 0.01 },
  { id: 'for3', amplitude: 2, speed: 0.0018, rotationSpeed: -0.008 },
  { id: 'for4', amplitude: 1.2, speed: 0.0015, rotationSpeed: 0.007 },
  { id: 'for5', amplitude: 1.7, speed: 0.0021, rotationSpeed: -0.009 }
];

const floatingItems = [];

floatingItemsConfig.forEach(item => {
  const el = document.getElementById(item.id);
  if (!el) return;

  const baseX = getComputedStyle(el).transform.includes("matrix") ? "0vw" : el.style.left || "0vw";
  const baseY = "0vh"; // adaptat pentru `translateY`

  floatingItems.push({
    el,
    baseX,
    baseY,
    amplitude: item.amplitude,
    speed: item.speed,
    rotationSpeed: item.rotationSpeed,
    phase: Math.random() * Math.PI * 2,
    active: false // va fi true doar dacă e în viewport
  });
});

let startTime = performance.now();

function animateFloating(time) {
  const t = time - startTime;

  floatingItems.forEach(item => {
    if (!item.active) return;

    const offsetY = Math.sin(t * item.speed + item.phase) * item.amplitude;
    const angle = t * item.rotationSpeed;

    item.el.style.transform = `
      translateX(${item.baseX}) 
      translateY(calc(${item.baseY} + ${offsetY}vh)) 
      rotate(${angle}deg)
    `;
  });

  requestAnimationFrame(animateFloating);
}

requestAnimationFrame(animateFloating);

// 🧠 Observer pentru activare/dezactivare individuală
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    const item = floatingItems.find(f => f.el === entry.target);
    if (item) {
      item.active = entry.isIntersecting;
    }
  });
}, { threshold: 0.3 });

floatingItems.forEach(item => observer.observe(item.el));



  const titluri = {
    t1: "poze/wet_look_eye.webp",
    t2: "poze/cat_eye_kim_kardashian.webp",
    t3: "poze/barbiedollkk.webp",
    t4: "poze/eye.webp",
    t5: "poze/foxy_eyelashescut.webp",
    t6: "poze/1d.webp",
    t7: "poze/2d.webp",
    t8: "poze/3d.webp",
    t9: "poze/barbiedoll.webp",
    t10: "poze/foxy.webp"
  };

  Object.keys(titluri).forEach(id => {
    const el = document.getElementById(id);
    el.addEventListener("click", () => {
      const img = document.getElementById("poza_cerc");
   gsap.to(img, {
    rotationY: -90,
    opacity: 0.5,
    duration: 0.5,
    ease: "power2.in",
    onComplete: () => {
      img.onload = () => {
        gsap.fromTo(img,
          {
            rotationY: 90,
            opacity: 0.5,
          },
          {
            rotationY: 0,
            opacity: 1,
            duration: 0.5,
            ease: "power2.out"
          }
        );
      };
      img.src = titluri[id];
    }
  });

      
    });
  });

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);
  const linie = document.getElementById("linie_sub");
  const trg=document.getElementsByClassName("galerie")[0];

  ScrollTrigger.create({
    trigger:trg,
    start: "top 60%",
    end: "bottom 40%",
    onEnter: () => {
      linie.classList.add('active-underline');
    },
    onLeave: () => {
      linie.classList.remove('active-underline');
    },
    onEnterBack: () => {
      linie.classList.add('active-underline');
    },
    onLeaveBack: () => {
      linie.classList.remove('active-underline');
    }
  });
});


window.addEventListener("load", () => {
  const micropigDiv = document.querySelector(".micropigmentare_div");
  const pozeleDiv = document.getElementById("pozeleceledoua");
  const body = document.body;
  let activated = false;
  let ticking = false;

  if (!micropigDiv || !pozeleDiv) return;

  function checkPosition() {
    const rect = micropigDiv.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    if (rect.top <= windowHeight * 0.7 && !activated) {
      micropigDiv.style.backgroundColor = "#000";
      micropigDiv.style.color = "#fff";
      pozeleDiv.style.backgroundColor = "#000";
      pozeleDiv.style.color = "#fff";
      body.style.backgroundColor = "#000";
      body.style.color = "#fff";
      activated = true;
    } else if (rect.top > windowHeight * 0.7 && activated) {
      micropigDiv.style.backgroundColor = "";
      micropigDiv.style.color = "";
      pozeleDiv.style.backgroundColor = "";
      pozeleDiv.style.color = "";
      body.style.backgroundColor = "#fff";
      body.style.color = "#000";
      activated = false;
    }

    ticking = false;
  }

  window.addEventListener("scroll", () => {
    if (!ticking) {
      requestAnimationFrame(checkPosition);
      ticking = true;
    }
  });

  // Verificare inițială la încărcarea paginii
  checkPosition();
});




// Asigură-te că GSAP e deja importat!
const header3 = document.querySelector('.headercesemisca');
const logo5 = header3.querySelector('#logo_header4');
const meniuul=document.getElementById("meniu");
const cerculethead2=document.getElementById("cerculethead2");
let lastScrollY = window.scrollY;
let headerVisible = false;

logo5.addEventListener('click', () => {
    window.location.href = "index.html";
  });
// Setează headerul invizibil la început
gsap.set(header3, { y: -100, opacity: 0, pointerEvents: "none" });

function getLuminosity(rgb) {
  let m = rgb.match(/\d+/g);
  if (!m) return 255; // fallback: consideră deschis
  let [r, g, b] = m.map(Number);
  return 0.299 * r + 0.587 * g + 0.114 * b;
}

function updateHeaderLogoSmart() {
  const rect = logo5.getBoundingClientRect();
  const x = rect.left + rect.width / 2;
  const y = rect.top + rect.height / 2;
  const under = document.elementFromPoint(x, y);
  if (!under) return;

  let bg = window.getComputedStyle(under).backgroundColor;
  let el = under;
  while ((bg === "rgba(0, 0, 0, 0)" || bg === "transparent") && el.parentElement) {
    el = el.parentElement;
    bg = window.getComputedStyle(el).backgroundColor;
  }

  const lum = getLuminosity(bg);

  // Stabilim calea imaginii dorite (alb sau negru)
  const desiredSrc = lum < 150 ? "Vectori/logo-alb.svg" : "Vectori/logo-negru.svg";
  const desiredColor = lum < 150 ? "white" : "black";

  // Actualizăm doar dacă NU e deja setată imaginea corectă
  if (logo5.src !== desiredSrc) {
    logo5.src = desiredSrc;
    meniuul.style.color = desiredColor;
    cerculethead2.style.borderColor = desiredColor;
  }
}


window.addEventListener('scroll', () => {
  const currentScroll = window.scrollY;

  if (currentScroll < lastScrollY && currentScroll > 60) {
    // Scroll sus – arată header3
    if (!headerVisible) {
      gsap.to(header3, {
        y: 0,
        opacity: 1,
        duration: 0.4,
        ease: "power2.out",
        pointerEvents: "auto",
        onComplete: updateHeaderLogoSmart
      });
      headerVisible = true;
    } else {
      // Dacă deja e vizibil și scroll-ul se schimbă, update la logo!
      updateHeaderLogoSmart();
    }
  } else {
    // Scroll jos sau sus de tot – ascunde header3
    if (headerVisible) {
      gsap.to(header3, { y: -100, opacity: 0, duration: 0.4, ease: "power2.in", pointerEvents: "none" });
      headerVisible = false;
    }
  }

  lastScrollY = currentScroll;
});




if (performance.navigation.type === 1) {
  // Dacă pagina a fost reîncărcată (F5 sau refresh)
  window.location.href = window.location.href; // Ca și cum a dat Enter în bară
}


}//TERMINAL PTR DESKTOP


function initMobile() {
 



}






if (window.matchMedia("(min-width: 901px)").matches) {
  initDesktop();
} else {
  initMobile();
}




