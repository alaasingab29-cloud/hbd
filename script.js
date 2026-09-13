
// ================= OPEN WEBSITE =================

let openBtn =
    document.getElementById("openBtn");

let welcome =
    document.getElementById("welcome");

let main =
    document.getElementById("main");

let birthdayMusic =
    document.getElementById("birthdayMusic");


openBtn.onclick = function () {

    // إخفاء شاشة البداية
    welcome.style.display = "none";

    // إظهار الموقع
    main.style.display = "block";

    // نبدأ من أول الموقع
    window.scrollTo(0, 0);

    // تشغيل الأغنية
    birthdayMusic.play();

    // تشغيل الكتابة بعد شوية
    setTimeout(typeMessage, 800);

};



// ================= MUSIC BUTTON =================

let musicBtn =
    document.getElementById("musicBtn");


musicBtn.onclick = function () {

    if (birthdayMusic.paused) {

        birthdayMusic.play();

        musicBtn.innerHTML = "🔊";

    }

    else {

        birthdayMusic.pause();

        musicBtn.innerHTML = "🔇";

    }

};



// ================= TYPING MESSAGE =================

let message =

    "I hope this birthday brings you everything you wish for. " +
    "You deserve beautiful moments, genuine happiness, " +
    "and a life full of reasons to smile. " +
    "Thank you for being such a wonderful person. " +
    "Never forget how special you are. ❤️";


let typingText =
    document.getElementById("typing-text");


let index = 0;


function typeMessage() {

    if (index < message.length) {

        typingText.innerHTML +=
            message.charAt(index);

        index++;

        setTimeout(typeMessage, 40);

    }

}



// ================= FINAL GIFT =================

let giftBtn =
    document.getElementById("giftBtn");


let finalMessage =
    document.getElementById("finalMessage");


giftBtn.onclick = function () {

    // إظهار المفاجأة
    finalMessage.style.display = "block";

    // إخفاء زر الهدية
    giftBtn.style.display = "none";

};

