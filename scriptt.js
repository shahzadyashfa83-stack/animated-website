// =============================
// Elements
// =============================

const welcome = document.getElementById("welcome");
const proposal = document.getElementById("proposal");
const love = document.getElementById("love");

const openBtn = document.getElementById("openBtn");
const yesBtn = document.getElementById("yesBtn");
const noBtn = document.getElementById("noBtn");

// =============================
// Open Proposal
// =============================

openBtn.addEventListener("click", () => {

    welcome.classList.remove("active");

    proposal.classList.add("active");

});

// =============================
// YES Button
// =============================

yesBtn.addEventListener("click", () => {

    proposal.classList.remove("active");

    love.classList.add("active");

    createConfetti();

});

// =============================
// Moving NO Button
// =============================

function moveButton() {

    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.random() * maxX;
    const randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("touchstart", moveButton);

// =============================
// Floating Hearts
// =============================

const hearts = document.querySelector(".hearts");

function createHeart() {

    const heart = document.createElement("span");

    heart.innerHTML = ["❤️","💖","💕","🌸","🌹"][Math.floor(Math.random()*5)];

    heart.style.position = "absolute";

    heart.style.left = Math.random()*100 + "%";

    heart.style.top = "100%";

    heart.style.fontSize = (20 + Math.random()*20) + "px";

    heart.style.animation = `floatUp ${6 + Math.random()*4}s linear forwards`;

    hearts.appendChild(heart);

    setTimeout(()=>{

        heart.remove();

    },10000);

}

setInterval(createHeart,300);

// =============================
// Floating Animation
// =============================

const style = document.createElement("style");

style.innerHTML = `

@keyframes floatUp{

0%{

transform:translateY(0) rotate(0deg);

opacity:0;

}

20%{

opacity:1;

}

100%{

transform:translateY(-120vh) rotate(360deg);

opacity:0;

}

}
`;

document.head.appendChild(style);

// =============================
// Confetti
// =============================

function createConfetti(){

    for(let i=0;i<150;i++){

        const confetti=document.createElement("div");

        confetti.style.position="fixed";

        confetti.style.left=Math.random()*100+"vw";

        confetti.style.top="-20px";

        confetti.style.width="10px";

        confetti.style.height="10px";

        confetti.style.borderRadius="50%";

        confetti.style.background=
        `hsl(${Math.random()*360},100%,60%)`;

        confetti.style.animation=
        `fall ${4+Math.random()*3}s linear forwards`;

        document.body.appendChild(confetti);

        setTimeout(()=>{

            confetti.remove();

        },7000);

    }

}

const style2=document.createElement("style");

style2.innerHTML=`

@keyframes fall{

0%{

transform:translateY(0) rotate(0deg);

}

100%{

transform:translateY(120vh) rotate(720deg);

}

}

`;

document.head.appendChild(style2);

// =============================
// Optional: Auto Hearts Forever
// =============================

setInterval(() => {

    if(love.classList.contains("active")){

        createHeart();

    }

},200);