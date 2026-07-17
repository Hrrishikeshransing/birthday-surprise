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
          // Keep the newest line visible
message.lastChild?.parentElement?.scrollIntoView({
    behavior: "smooth",
    block: "end"
});

    index++;

    // Scroll the page every 8 characters
    if(index % 8 === 0){

        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth"
        });

    }

    setTimeout(typing, 35);

}else{

    // Final scroll after typing completes
    window.scrollTo({
        top: document.body.scrollHeight,
        behavior: "smooth"
    });

    setTimeout(function(){

        document.getElementById("gallerySection").style.display = "block";

        showGalleryImages();

        document.getElementById("gallerySection").scrollIntoView({
            behavior: "smooth"
        });

    },2000);

}

    }

    typing();

}

function showGalleryImages(){

   const images = document.querySelectorAll(".gallery img");

    const continueBtn = document.getElementById("continueJourneyBtn");

    images.forEach((img, index) => {

        setTimeout(() => {

            img.classList.add("show");

            // After the last image appears
            if(index === images.length - 1){

                setTimeout(() => {

                    continueBtn.style.display = "block";

                }, 1000);

            }

        }, index * 600);

    });

}
document.getElementById("continueJourneyBtn").addEventListener("click", function(){

    this.style.display = "none";

    document.getElementById("cakeSection").style.display = "block";

    document.getElementById("cakeSection").scrollIntoView({
        behavior: "smooth"
    });

});
