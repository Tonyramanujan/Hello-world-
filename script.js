// =====================================================
// PART 1
// Open My Heart Button
// Background Music
// Scroll to About Section
// =====================================================

const startBtn = document.getElementById("startBtn");
const music = document.getElementById("bgMusic");

if (startBtn) {

    startBtn.addEventListener("click", function () {

        // Play background music
        if (music) {
            music.volume = 0.5;

            music.play().catch(function (err) {
                console.log("Music autoplay blocked:", err);
            });
        }

        // Smooth scroll to About section
        const about = document.getElementById("about");

        if (about) {

            about.scrollIntoView({

                behavior: "smooth"

            });

        }

    });

}

// ============================================
// Floating welcome animation
// ============================================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition = "opacity 2s";

        document.body.style.opacity = "1";

    }, 100);

});

// ============================================
// Button glow effect
// ============================================

setInterval(() => {

    if (startBtn) {

        startBtn.classList.toggle("glow");

    }

}, 1200);

// ============================================
// Small sparkle generator
// ============================================

function createSparkle() {

    const sparkle = document.createElement("div");

    sparkle.className = "sparkle";

    sparkle.style.left = Math.random() * window.innerWidth + "px";

    sparkle.style.top = Math.random() * window.innerHeight + "px";

    sparkle.style.animationDuration =
        (1 + Math.random() * 2) + "s";

    document.body.appendChild(sparkle);

    setTimeout(() => {

        sparkle.remove();

    }, 2500);

}

setInterval(createSparkle, 250);

// =====================================================
// PART 2
// Scroll Reveal Animation
// Typewriter Effect
// =====================================================

// ---------- Reveal Sections on Scroll ----------

const revealSections = document.querySelectorAll(
"#about,#letter,#poetry,#gallery,#surprise"
);

function revealOnScroll(){

    const trigger = window.innerHeight * 0.8;

    revealSections.forEach(section=>{

        const top = section.getBoundingClientRect().top;

        if(top < trigger){

            section.classList.add("show");

        }

    });

}

window.addEventListener("scroll",revealOnScroll);

revealOnScroll();


// ---------- Typewriter Effect ----------

function typeWriter(element,speed){

    if(!element) return;

    const originalText = element.innerHTML;

    element.innerHTML="";

    let i=0;

    function typing(){

        if(i<originalText.length){

            element.innerHTML += originalText.charAt(i);

            i++;

            setTimeout(typing,speed);

        }

    }

    typing();

}


// ---------- Apply Typewriter ----------

window.addEventListener("load",()=>{

    const title=document.querySelector(".hero h1");

    const subtitle=document.querySelector(".subtitle");

    if(title) typeWriter(title,80);

    setTimeout(()=>{

        if(subtitle) typeWriter(subtitle,35);

    },1800);

});


// ---------- Floating Text Animation ----------

const glassCards=document.querySelectorAll(".glass");

glassCards.forEach(card=>{

    card.addEventListener("mouseenter",()=>{

        card.style.transform="translateY(-10px) scale(1.02)";

    });

    card.addEventListener("mouseleave",()=>{

        card.style.transform="translateY(0) scale(1)";

    });

});


// ---------- Smooth Scroll Buttons ----------

document.querySelectorAll("button").forEach(btn=>{

    btn.addEventListener("click",()=>{

        btn.style.transform="scale(.95)";

        setTimeout(()=>{

            btn.style.transform="scale(1)";

        },150);

    });

});


// ---------- Random Glowing Stars ----------

function randomGlow(){

    const stars=document.querySelectorAll(".stars,.stars2,.stars3");

    stars.forEach(star=>{

        star.style.opacity=(0.5+Math.random()*0.5);

    });

}

setInterval(randomGlow,1500);

// =====================================================
// PART 3
// Falling Rose Petals
// Floating Hearts
// Sparkles
// =====================================================

// ---------- Falling Rose Petals ----------

function createPetal() {

    const petal = document.createElement("div");

    petal.className = "petal";

    petal.style.left = Math.random() * window.innerWidth + "px";

    petal.style.animationDuration =
        (6 + Math.random() * 6) + "s";

    petal.style.opacity =
        0.5 + Math.random() * 0.5;

    petal.style.transform =
        "rotate(" + Math.random() * 360 + "deg)";

    document.querySelector(".petals").appendChild(petal);

    setTimeout(() => {

        petal.remove();

    },12000);

}

setInterval(createPetal,350);


// ---------- Floating Hearts ----------

function createHeart(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="❤️";

    heart.style.left=Math.random()*window.innerWidth+"px";

    heart.style.fontSize=
        (18+Math.random()*30)+"px";

    heart.style.animationDuration=
        (5+Math.random()*4)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },9000);

}

setInterval(createHeart,1200);


// ---------- Sparkles ----------

function createMagicSparkle(){

    const sparkle=document.createElement("div");

    sparkle.className="sparkle";

    sparkle.style.left=
        Math.random()*window.innerWidth+"px";

    sparkle.style.top=
        Math.random()*window.innerHeight+"px";

    sparkle.style.animationDuration=
        (1+Math.random()*2)+"s";

    document.body.appendChild(sparkle);

    setTimeout(()=>{

        sparkle.remove();

    },2500);

}

setInterval(createMagicSparkle,250);


// ---------- Mouse Glow ----------

document.addEventListener("mousemove",(e)=>{

    const glow=document.createElement("div");

    glow.className="particle";

    glow.style.left=e.clientX+"px";

    glow.style.top=e.clientY+"px";

    document.body.appendChild(glow);

    setTimeout(()=>{

        glow.remove();

    },1500);

});


// ---------- Random Twinkling ----------

setInterval(()=>{

    document.querySelectorAll(".stars,.stars2,.stars3")
    .forEach(star=>{

        star.style.opacity=
            0.3+Math.random()*0.7;

    });

},1800);


// ---------- Background Glow ----------

setInterval(()=>{

    document.body.style.backgroundPosition=
        Math.random()*100+"% "+
        Math.random()*100+"%";

},4000);

// =====================================================
// PART 4
// Hidden Surprise
// Fireworks
// Final Animation
// =====================================================

// ---------- Hidden Surprise ----------

const bigHeart = document.querySelector(".bigHeart");

if (bigHeart) {

    bigHeart.addEventListener("click", () => {

        launchFireworks();

        const final = document.createElement("div");

        final.className = "finalMessage";

        final.innerHTML = `
        ✨<br><br>

        Bangaram ❤️<br><br>

        Thank you for becoming<br>
        one of the most beautiful<br>
        chapters of my life.<br><br>

        No matter where life takes us...<br><br>

        You'll always have a beautiful
        place in my memories.<br><br>

        🌹 Happy Girlfriend's Day 🌹
        `;

        document.body.appendChild(final);

        final.scrollIntoView({
            behavior: "smooth"
        });

    });

}


// ---------- Fireworks ----------

function launchFireworks(){

    for(let i=0;i<120;i++){

        const fire=document.createElement("div");

        fire.className="firework";

        fire.style.left=
            Math.random()*window.innerWidth+"px";

        fire.style.top=
            Math.random()*window.innerHeight+"px";

        fire.style.background=
            `hsl(${Math.random()*360},100%,70%)`;

        fire.style.animationDuration=
            (1+Math.random())+"s";

        document.body.appendChild(fire);

        setTimeout(()=>{

            fire.remove();

        },1800);

    }

}


// ---------- Music Fade Out ----------

function fadeMusic(){

    if(!music) return;

    let volume=music.volume;

    const fade=setInterval(()=>{

        if(volume>0.02){

            volume-=0.02;

            music.volume=volume;

        }

        else{

            music.pause();

            clearInterval(fade);

        }

    },200);

}


// ---------- Auto Ending ----------

setTimeout(()=>{

    fadeMusic();

},240000);


// ---------- Final Hearts Rain ----------

function heartRain(){

    const heart=document.createElement("div");

    heart.className="heart";

    heart.innerHTML="💖";

    heart.style.left=
        Math.random()*window.innerWidth+"px";

    heart.style.fontSize=
        (25+Math.random()*35)+"px";

    heart.style.animationDuration=
        (4+Math.random()*3)+"s";

    document.body.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },7000);

}

setInterval(heartRain,800);


// ---------- Ending Sparkles ----------

setInterval(()=>{

    launchFireworks();

},45000);


// ---------- Console Message ----------

console.log("❤️ Happy Girlfriend's Day Bangaram ❤️");
