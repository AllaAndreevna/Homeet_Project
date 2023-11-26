// --------i'm still trying to get data 

// Make sure the element exists before using querySelector
const wrapper = document.querySelector('.wrapper');
if (wrapper) {
    form = wrapper.querySelectorAll(".form"),
        submitInput = form[0].querySelector('input[type = "submit"]');
} else {
    console.error('Cannot find element');
}

// const wrapper = document.querySelector('.wrapper'),
// form = wrapper.querySelectorAll(".form"),
//     submitInput = form[0].querySelector('input[type = "submit"]');

function getDataForm(e) {
    e.preventDefault();
    var formData = new FormData(form[0]);
    alert(formData.get('name') + '-' + formData.get('tg') + '-' + formData.get('nom_tel') + formData.get('osebe'));
}

document.addEventListener('DOMContentLoaded', function () {
    submitInput.addEventListener('click', getDataForm, false);
}, false);

function myFunction() {
    // Make sure the element exists before using querySelector
    

    let name = document.querySelector("#name");
    let users_added_name = document.querySelector("#users_added_name");
    users_added_name.innerHTML = name.value;

    let osebe = document.querySelector("#osebe");
    let users_added_info = document.querySelector("#users_added_info");
    users_added_info.innerHTML = osebe.value;

    var paren = document.getElementById('paren');
    if (document.getElementById('paren').checked) {
        users_added_gender.innerHTML = paren.value;
    }
    if (document.getElementById('devushka').checked) {
        users_added_gender.innerHTML = devushka.value;
    }

}


//here i'm taking a photo

// oh no, i don't know why, but this code works only in html file in <script></script>. i'm sorry :)


//here i'm getting the age

function submitBday() {
    let Bdate = document.getElementById('date-input').value;
    let Bday = +new Date(Bdate);
    let Q4A = ~~((Date.now() - Bday) / (31557600000)) + " лет";
    let theBday = document.getElementById('users_added_years');
    theBday.innerHTML = Q4A;
}

// here i'm taking form data 

// Получаем значение из поля ввода
var nameVal = document.getElementById("name").value;
// Сохраняем значение в local storage
localStorage.setItem("name", nameVal);


// Получаем значение из поля ввода
var genderVal = document.getElementById("gender").value;
var paren = document.getElementById('paren');
    if (document.getElementById('paren').checked) {
        users_added_gender.innerHTML = paren.value;
    }
    if (document.getElementById('devushka').checked) {
        users_added_gender.innerHTML = devushka.value;
    }
// Сохраняем значение в local storage
localStorage.setItem("myData", inputVal);


// Получаем значение из поля ввода
var inputVal = document.getElementById("myInput").value;
// Сохраняем значение в local storage
localStorage.setItem("myData", inputVal);

