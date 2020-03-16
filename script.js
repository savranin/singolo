const menu = document.getElementById('menu');
const menu2 = document.getElementById('menu2');
const porfolio_pic = document.getElementById('grid-header');
const button = document.getElementById('submit');
const close_button = document.getElementById('close-submit');


menu.addEventListener('click', (event) => {
    menu.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
})

menu2.addEventListener('click', (event) => {
    menu2.querySelectorAll('a').forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
})

porfolio_pic.addEventListener('click', (event) => {
    porfolio_pic.querySelectorAll('img').forEach(el => el.classList.remove('active_pic'));
    event.target.classList.add('active_pic');
})


const name = document.querySelector('.inputs-name');
const email = document.querySelector('.inputs-email');

const checkEmail = () => {
    if (/^[a-zа-яё\s]{2,}$/i.test(name.value)) {
        document.getElementById("wrong_email").style.display = "none";
        return true;
    } else {
        document.getElementById("wrong_email").style.display = "block";
        return false;
    }
}

const checkName = () => {
    if (/^[a-zа-яё\s]{2,}$/i.test(name.value)) {
        document.getElementById("wrong_name").style.display = "none";
        return true;
    } else {
        document.getElementById("wrong_name").style.display = "block";
        return false;
    }
}

name.addEventListener('input', checkName);
email.addEventListener('input', checkEmail);

button.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    if (!checkName() || !checkEmail()) {
        if (!checkName()) {
            name.focus();
        } else {
            email.focus();
        }
    } else {
        const subject = document.getElementById('subject').value.toString();
        const describe = document.getElementById('input-describe').value.toString();
        let text = 'Письмо отправлено';
        if (subject != '') {
            text = text + '\n' + 'Тема: ' + subject;
        }
        else {
            text = text + '\n' + 'Без темы';
        }

        if (describe != '') {
            text = text + '\n' + 'Описание: ' + describe;
        }
        else {
            text = text + '\n' + 'Без описания';
        }

        document.getElementById('result').innerText = text;
        document.getElementById('message-block').classList.remove('hidden');
    }
})


close_button.addEventListener('click', (event) => {
    const subject = document.getElementById('subject').value.toString();
    document.getElementById('result').innerText = '';
    document.getElementById('message-block').classList.add('hidden');
})


let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
    showSlides(slideIndex += 1);
}


function minusSlide() {
    showSlides(slideIndex -= 1);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[slideIndex - 1].style.display = "flex";
}

let picIndex = 0;
function changePictures() {
    let slides = document.getElementsByClassName("pic-portfolio");

    picIndex++;
    if (picIndex == 12) {
        picIndex = 0;
    }

    for (i = 1; i < slides.length + 1; i++) {
        let num = i + picIndex;
        if (num > 12) {
            num = i + picIndex - 12;
        }
        slides[i - 1].src = "assets/portfolio" + num + ".png";
    }
}

function phone_vertical_1Click() {
    document.getElementById("phone-vertical_1").style.display = "none";
    document.getElementById("phone-vertical_2").style.display = "block";
}

function phone_vertical_2Click() {
    document.getElementById("phone-vertical_1").style.display = "block";
    document.getElementById("phone-vertical_2").style.display = "none";
}

function phone_horizontal_1Click() {
    document.getElementById("phone-horizontal_1").style.display = "none";
    document.getElementById("phone-horizontal_2").style.display = "block";
}

function phone_horizontal_2Click() {
    document.getElementById("phone-horizontal_1").style.display = "block";
    document.getElementById("phone-horizontal_2").style.display = "none";
}

function phone_vertical_2_1Click() {
    document.getElementById("slide2_1").style.display = "none";
    document.getElementById("slide2_1_black").style.display = "block";
    document.getElementById("slide2_shadow").style.display = "block";
}

function phone_vertical_2_1_blackClick() {
    document.getElementById("slide2_1").style.display = "block";
    document.getElementById("slide2_1_black").style.display = "none";
    document.getElementById("slide2_shadow").style.display = "none";
}

function phone_vertical_2_2Click() {
    document.getElementById("slide2_2").style.display = "none";
    document.getElementById("slide2_2_black").style.display = "block";
    document.getElementById("slide2_1shadow").style.display = "block";
}

function phone_vertical_2_2_blackClick() {
    document.getElementById("slide2_2").style.display = "block";
    document.getElementById("slide2_2_black").style.display = "none";
    document.getElementById("slide2_1shadow").style.display = "none";
}

function slide2_3_1Click() {
    document.getElementById("slide2_3_1").style.display = "none";
    document.getElementById("slide2_3_2").style.display = "block";
}

function slide2_3_2Click() {
    document.getElementById("slide2_3_1").style.display = "block";
    document.getElementById("slide2_3_2").style.display = "none";
}





