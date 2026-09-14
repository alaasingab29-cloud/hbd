// ================= OPEN WEBSITE =================

let openBtn = document.getElementById("openBtn");
let welcome = document.getElementById("welcome");
let main = document.getElementById("main");
let birthdayMusic = document.getElementById("birthdayMusic");

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

let musicBtn = document.getElementById("musicBtn");

musicBtn.onclick = function () {

    if (birthdayMusic.paused) {

        birthdayMusic.play();

        musicBtn.innerHTML = "🔊";

    } else {

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

let typingText = document.getElementById("typing-text");

let index = 0;

function typeMessage() {

    if (index < message.length) {

        typingText.innerHTML += message.charAt(index);

        index++;

        setTimeout(typeMessage, 40);

    }

}


// ================= FINAL GIFT =================

let giftBtn = document.getElementById("giftBtn");
let finalMessage = document.getElementById("finalMessage");

giftBtn.onclick = function () {

    // إظهار المفاجأة
    finalMessage.style.display = "block";

    // إخفاء زر الهدية
    giftBtn.style.display = "none";

};


// ================= IMAGE MODAL (ZOOM) =================

let modal = document.getElementById("imageModal");
let modalImg = document.getElementById("imgFull");
let closeModal = document.querySelector(".close-modal");
let photos = document.querySelectorAll(".photo img");

photos.forEach(function (img) {

    img.onclick = function () {

        if (modal) {

            modal.style.display = "block";
            modalImg.src = this.src;

        }

    };

});

if (closeModal) {

    closeModal.onclick = function () {

        modal.style.display = "none";

    };

}

if (modal) {

    modal.onclick = function (e) {

        if (e.target === modal) {

            modal.style.display = "none";

        }

    };

}


// ================= COUNTDOWN & SECRET MESSAGE =================

// موعد فتح السر:
// 26 سبتمبر 2026 الساعة 12:00 AM

const birthdayDate =
    new Date("September 26, 2026 00:00:00").getTime();


// كلمة السر

const secretPassword = "26/9/2026";


// ================= COUNTDOWN =================

const countdownInterval = setInterval(function () {

    const now = new Date().getTime();

    const distance = birthdayDate - now;


    // حساب الوقت المتبقي

    const days =
        Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours =
        Math.floor(
            (distance % (1000 * 60 * 60 * 24)) /
            (1000 * 60 * 60)
        );

    const minutes =
        Math.floor(
            (distance % (1000 * 60 * 60)) /
            (1000 * 60)
        );

    const seconds =
        Math.floor(
            (distance % (1000 * 60)) /
            1000
        );


    // جلب عناصر العداد

    const daysElem =
        document.getElementById("days");

    const hoursElem =
        document.getElementById("hours");

    const minutesElem =
        document.getElementById("minutes");

    const secondsElem =
        document.getElementById("seconds");


    // عرض الوقت

    if (daysElem) {

        daysElem.innerText =
            days < 10 ? "0" + days : days;

    }

    if (hoursElem) {

        hoursElem.innerText =
            hours < 10 ? "0" + hours : hours;

    }

    if (minutesElem) {

        minutesElem.innerText =
            minutes < 10 ? "0" + minutes : minutes;

    }

    if (secondsElem) {

        secondsElem.innerText =
            seconds < 10 ? "0" + seconds : seconds;

    }


    // ================= WHEN BIRTHDAY STARTS =================

    if (distance <= 0) {

        clearInterval(countdownInterval);


        // إخفاء العداد

        const countdownBox =
            document.getElementById("countdown");


        // إخفاء البطاقة المقفولة

        const lockedCard =
            document.getElementById("lockedCard");


        // إظهار منطقة كلمة السر

        const passwordArea =
            document.getElementById("passwordArea");


        if (countdownBox) {

            countdownBox.style.display = "none";

        }


        if (lockedCard) {

            lockedCard.style.display = "none";

        }


        if (passwordArea) {

            passwordArea.style.display = "block";

        }

    }

}, 1000);


// ================= PASSWORD =================

const passBtn =
    document.getElementById("passBtn");

const passInput =
    document.getElementById("passInput");


if (passBtn) {

    passBtn.onclick = function () {

        if (passInput.value === secretPassword) {

            // إخفاء كلمة السر

            document.getElementById("passwordArea")
                .style.display = "none";


            // إظهار الرسالة السرية

            document.getElementById("secretMessage")
                .style.display = "block";

        } else {

            alert("Wrong passcode! Try again ❤️");

            passInput.value = "";

        }

    };

}
