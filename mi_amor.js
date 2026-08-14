const suite1 = document.querySelector(".ouvre")
const div1 = document.querySelector(".debut")
const div2 = document.querySelector(".lettre")
const suite2 = document.querySelector(".lettre1")
const div3 = document.querySelector(".futur")
const suite3 = document.querySelector(".futur1")
const div4 = document.querySelector(".raison")
const suite4 = document.querySelector(".raison1")
const div5 = document.querySelector(".promesse")
const suite5 = document.querySelector(".promesse1")
const div6 = document.querySelector(".feu")
const suite6 = document.querySelector(".feu1")
const div7 = document.querySelector(".fin")
suite1.addEventListener("click", () =>{
    div1.style.display = 'none';
    div2.style.display = 'flex';
});
suite2.addEventListener("click", () =>{
    div2.style.display = 'none';
    div3.style.display = 'flex';
});
suite3.addEventListener("click", () =>{
    div3.style.display = 'none';
    div4.style.display = 'flex';
});
suite4.addEventListener("click", () =>{
    div4.style.display = 'none';
    div5.style.display = 'flex';
});
suite5.addEventListener("click", () =>{
    div5.style.display = 'none';
    div6.style.display = 'flex';

    
});
suite6.addEventListener("click", () =>{
    div6.style.display = 'none';
    div7.style.display = 'flex';
});

// 1. Ta fonction de feu d'artifice infini (inchangée)
        function lancerFeuArtificeInfini() {
            var defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };
            function randomInRange(min, max) {
              return Math.random() * (max - min) + min;
            }
            setInterval(function() {
              var particleCount = 40;
              confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
              confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
            }, 250);
        }

        // 2. On crée "l'observateur" (IntersectionObserver)
        const observateur = new IntersectionObserver((entrees) => {
            entrees.forEach((entree) => {
                
                // Si l'élément surveillé (div5) devient visible à l'écran...
                if (entree.isIntersecting) {
                    
                    // On lance le feu d'artifice
                    lancerFeuArtificeInfini(); 
                    
                    // TRÈS IMPORTANT : On dit à l'observateur d'arrêter de surveiller la div5.
                    // Sinon, si elle scrolle vers le haut puis redescend, ça lancera
                    // le feu d'artifice en double et fera ramer le navigateur !
                    observateur.unobserve(entree.target);
                }
            });
        });

        // 3. On sélectionne ta div5 et on dit à l'observateur de la surveiller
        // const div5 = document.querySelector;
        observateur.observe(div6);