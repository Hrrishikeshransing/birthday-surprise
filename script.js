/* ======================================================
   Birthday Surprise Website
   Scene 1 - Countdown Portal
====================================================== */

//const birthdayDate = new Date("August 10, 2026 00:00:00").getTime();
const birthdayDate = new Date("January 1, 2025 00:00:00").getTime();

const loadingScreen = document.getElementById("loadingScreen");

const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

const giftBox = document.getElementById("giftBox");
const giftMessage = document.getElementById("giftMessage");
const lockMessage = document.getElementById("lockMessage");

let unlocked = false;


// Hide Loading Screen

window.addEventListener("load",()=>{

    setTimeout(()=>{

        loadingScreen.style.display="none";

    },2500);

});

// ==========================================
// Live Countdown
// ==========================================

function updateCountdown(){

    const now = new Date().getTime();

    const distance = birthdayDate - now;

    // Birthday has arrived

if(distance <= 0){

    unlocked = true;

    days.innerHTML = "00";
    hours.innerHTML = "00";
    minutes.innerHTML = "00";
    seconds.innerHTML = "00";

    giftMessage.innerHTML = "🎉 Open Your Birthday Gift 🎉";

    giftBox.classList.add("unlocked");

    return;

}

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));

    const h = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) /
        (1000 * 60 * 60)
    );

    const m = Math.floor(
        (distance % (1000 * 60 * 60)) /
        (1000 * 60)
    );

    const s = Math.floor(
        (distance % (1000 * 60)) /
        1000
    );

    days.innerHTML = String(d).padStart(2,"0");
    hours.innerHTML = String(h).padStart(2,"0");
    minutes.innerHTML = String(m).padStart(2,"0");
    seconds.innerHTML = String(s).padStart(2,"0");

}

// Start countdown immediately
updateCountdown();

// Update every second
setInterval(updateCountdown,1000);

// ==========================================
// Gift Box Click
// ==========================================

giftBox.addEventListener("click",()=>{

    // Birthday not yet arrived

    if(!unlocked){

        lockMessage.style.display="block";

        giftBox.animate([

            {transform:"translateX(0px)"},

            {transform:"translateX(-8px)"},

            {transform:"translateX(8px)"},

            {transform:"translateX(-8px)"},

            {transform:"translateX(8px)"},

            {transform:"translateX(0px)"}

        ],{

            duration:500

        });

        return;

    }

   // Birthday has arrived

giftMessage.innerHTML = "✨ Opening Your Surprise... ✨";

giftBox.classList.add("open");

document
.getElementById("goldenLight")
.classList.add("active");
   createSparkles();
createMagicParticles();

document.getElementById("bgMusic").play();

setTimeout(()=>{

    document.getElementById("birthdayExperience").style.display="block";

    document.getElementById("birthdayExperience")
        .scrollIntoView({
            behavior:"smooth"
        });

    typeWriter();

},1800);

});
// ==========================================
// Loading Messages
// ==========================================

const loadingText = document.querySelector("#loadingScreen p");

const loadingMessages = [

    "Collecting beautiful memories...",

    "Wrapping your surprise...",

    "Adding lots of love...",

    "Almost ready...",

    "Welcome ❤️"

];

let loadingIndex = 0;

const loadingInterval = setInterval(()=>{

    if(loadingText){

        loadingText.innerHTML = loadingMessages[loadingIndex];

        loadingIndex++;

        if(loadingIndex >= loadingMessages.length){

            clearInterval(loadingInterval);

        }

    }

},500);


// ==========================================
// Prevent scrolling before unlock
// ==========================================

document.body.style.overflow = "hidden";

window.addEventListener("load",()=>{

    setTimeout(()=>{

        document.body.style.overflowY = "auto";

    },2500);

});


// ==========================================
// Scene 1 Ready
// ==========================================

console.log("✅ Scene 1 Loaded Successfully");

function createSparkles(){
   console.log("Sparkles function called");

    for(let i=0;i<80;i++){

        const sparkle=document.createElement("div");

        sparkle.className="sparkle";

        sparkle.style.left=window.innerWidth/2+"px";
        sparkle.style.top=window.innerHeight/2+"px";

        sparkle.style.setProperty(
            "--x",
            (Math.random()*900-450)+"px"
        );

        sparkle.style.setProperty(
            "--y",
            (Math.random()*700-350)+"px"
        );

        sparkle.style.animationDelay=(Math.random()*0.5)+"s";

        document.body.appendChild(sparkle);

        setTimeout(()=>{

            sparkle.remove();

        },3000);

    }

}

function createMagicParticles(){

    for(let i=0;i<40;i++){

        const particle=document.createElement("div");

        particle.className="magicParticle";

        particle.style.left=
            (window.innerWidth/2 + (Math.random()*120-60))+"px";

        particle.style.top=
            (window.innerHeight/2 + (Math.random()*120-60))+"px";

        particle.style.setProperty(
            "--drift",
            (Math.random()*200-100)+"px"
        );

        particle.style.animationDelay=
            (Math.random()*0.8)+"s";

        document.body.appendChild(particle);

        setTimeout(()=>{
            particle.remove();
        },4500);

    }

}
const birthdayText =
`Happy Birthday, Sonal! ❤️

Today is all about celebrating you.

May your smile always shine brighter than the stars, your dreams come true, and your heart always be filled with happiness.

Thank you for being such a wonderful person.

This little surprise was made especially for you.

With lots of love,
Hrishikesh ❤️`;

function typeWriter(){

    const message = document.getElementById("typewriterMessage");

    const container = document.getElementById("birthdayMessageContainer");

    container.classList.add("show");

    let index = 0;

    message.innerHTML = "";

   function typing(){

    if(index < birthdayText.length){

        message.innerHTML += birthdayText.charAt(index);

message.scrollTop = message.scrollHeight;

        // Keep the newest line visible
       index++;

requestAnimationFrame(() => {

    container.scrollIntoView({
        behavior: "instant",
        block: "start"
    });

    window.scrollBy(0, 40);

});
       let delay = 45;

const char = birthdayText.charAt(index - 1);

if(char === ","){
    delay = 300;
}
else if(char === "." || char === "!" || char === "?"){
    delay = 700;
}
else if(char === "\n"){
    delay = 1000;
}

setTimeout(typing, delay);

    }else{

    message.scrollIntoView({
        behavior: "smooth",
        block: "end"
    });

    setTimeout(function(){

        document.getElementById("gallerySection").style.display = "block";

        showGalleryImages();

        document.getElementById("gallerySection").scrollIntoView({
            behavior: "smooth"
        });

    },5000);

}
}

    typing();

}

function showGalleryImages() {

    const images = document.querySelectorAll(".gallery img");

    let current = 0;

    function showNextPhoto() {

        if (current > 0) {

    images[current - 1].style.opacity = "0";

    setTimeout(() => {

        images[current - 1].classList.remove("show");

    }, 700);

}

images[current].classList.add("show");

images[current].style.opacity = "1";

        images[current].scrollIntoView({
            behavior: "smooth",
            block: "center"
        });

        setTimeout(() => {

            current++;

            if (current < images.length) {

                showNextPhoto();

            } else {

                document.getElementById("cakeSection").style.display = "block";

                document.getElementById("cakeSection").scrollIntoView({
                    behavior: "smooth"
                });

                setTimeout(() => {

                    document.getElementById("candles").classList.add("blown");

                    const wish = document.getElementById("magicWish");

                    wish.style.display = "block";

                    wish.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });

                    setTimeout(() => {

                        startConfetti();
                        startBalloons();
                        startFireworks();

                    }, 1200);

                }, 5000);

            }

        }, 3000);

    }

    showNextPhoto();

}
function goToCake(){

    const cake = document.getElementById("cakeSection");

    const button = document.getElementById("continueJourneyBtn");

    button.style.display = "none";

    cake.style.display = "block";

    setTimeout(() => {

        cake.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    },100);

}
function blowCandles(){

    alert("Button Clicked!");

}
function startConfetti(){

    const container = document.getElementById("confettiContainer");

    for(let i = 0; i < 120; i++){

        const piece = document.createElement("div");

        piece.className = "confetti";

        piece.style.left = Math.random() * 100 + "%";

        piece.style.animationDelay = (Math.random() * 2) + "s";

        piece.style.transform = "rotate(" + (Math.random() * 360) + "deg)";

        container.appendChild(piece);

        setTimeout(() => {

            piece.remove();

        }, 4500);

    }

}
function startBalloons(){

    const container = document.getElementById("balloonContainer");

    const colors = [
        "#ff4d6d",
        "#ff99cc",
        "#ffd700",
        "#ffffff"
    ];

    for(let i = 0; i < 20; i++){

        const balloon = document.createElement("div");

        balloon.className = "balloon";

        balloon.style.left = (Math.random() * 100) + "%";

        balloon.style.background =
            colors[Math.floor(Math.random() * colors.length)];

        balloon.style.animationDelay =
            (Math.random() * 3) + "s";

        balloon.style.animationDuration =
            (8 + Math.random() * 4) + "s";

        container.appendChild(balloon);

        setTimeout(() => {

            balloon.remove();

        },12000);

    }

}
function startFireworks(){

    const container = document.getElementById("fireworksContainer");

    for(let burst = 0; burst < 8; burst++){

        setTimeout(() => {

            const centerX = Math.random() * window.innerWidth;
            const centerY = Math.random() * (window.innerHeight * 0.5) + 50;

            for(let i = 0; i < 35; i++){

                const spark = document.createElement("div");

                spark.className = "firework";

                spark.style.left = centerX + "px";
                spark.style.top = centerY + "px";

                const angle = (Math.PI * 2 * i) / 35;
                const distance = 80 + Math.random() * 80;

                spark.style.setProperty("--x",
                    Math.cos(angle) * distance + "px");

                spark.style.setProperty("--y",
                    Math.sin(angle) * distance + "px");

                const colors = [
                    "#FFD700",
                    "#FF4D6D",
                    "#FFFFFF",
                    "#FF99CC"
                ];

                spark.style.background =
                    colors[Math.floor(Math.random() * colors.length)];

                container.appendChild(spark);

                setTimeout(() => {

                    spark.remove();

                },1500);

               

            }

        }, burst * 800);

    }
   setTimeout(() => {

    showFinalLetter();

}, 8500);

}


function showFinalLetter(){

    // Show the final letter section
const finalSection = document.getElementById("finalMessage");
const finalLetter = document.getElementById("finalLetter");

finalSection.classList.add("show");

// Hide the cake first
document.getElementById("cakeSection").style.display = "none";

// Scroll once to the final letter
requestAnimationFrame(() => {

    finalSection.scrollIntoView({
        behavior: "smooth",
        block: "start"
    });

});

   
    const message = `Happy Birthday Sonal ❤️

On your special day, I just want to take a moment to tell you how much you truly mean to me.

Thank you for being there during my toughest times, standing by my side when things weren't easy, and never letting me feel alone. Your support has been my greatest strength.

Thank you for always understanding me, even when I struggle to express myself. Thank you for your patience, your kindness, and all the little things you do for me every single day. They often go unnoticed, but they mean the world to me.

You are not just my wife, but also my best friend, my partner, and my greatest blessing. Life feels so much more beautiful with you in it. Your love gives me peace, your smile fills my heart with happiness, and your presence makes everything better.

I am truly grateful for you and everything you do. I promise to always stand by your side, support you through every step of life, and love you more with each passing day.

Once again, Happy Birthday Sonal. I hope your day is as wonderful and as special as you are to me. ❤️

With all my love,

Hrishikesh ❤️`;

    finalLetter.textContent = "";

    let i = 0;

    function typeLetter(){

    if(i >= message.length){

        

        startHeartRain();

        return;

    }

    const char = message.charAt(i);

    finalLetter.textContent += char;

    i++;

    // Smoothly follow the text while typing
    requestAnimationFrame(() => {

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "instant"
        });

    });

    let delay = 45;

    if(char === ","){
        delay = 300;
    }
    else if(char === "." || char === "!" || char === "?"){
        delay = 700;
    }
    else if(char === "\n"){
        delay = 1000;
    }

    setTimeout(typeLetter, delay);

}

typeLetter();

}
function startHeartRain(){

    const container = document.getElementById("heartContainer");

    setInterval(()=>{

        const heart = document.createElement("div");

        heart.className = "floatingHeart";

        heart.innerHTML = Math.random() > 0.5 ? "❤️" : "💕";

        heart.style.left = Math.random()*100 + "%";

        heart.style.animationDuration =
            (4 + Math.random()*3) + "s";

        container.appendChild(heart);

        setTimeout(()=>{

            heart.remove();

        },7000);

    },400);

}
function scrollToSection(sectionId, delay = 300){

    setTimeout(() => {

        const section = document.getElementById(sectionId);

        if(!section) return;

        // Safari needs the section to be rendered first
        requestAnimationFrame(() => {

            const y =
                section.getBoundingClientRect().top +
                window.pageYOffset -
                20;

            window.scrollTo({
                top: y,
                behavior: "smooth"
            });

        });

    }, delay);

}
