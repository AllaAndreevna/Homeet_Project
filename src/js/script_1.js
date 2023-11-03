// --------i'm still trying to get data 
const wrapper = document.querySelector('.wrapper'),
    form = wrapper.querySelectorAll(".form"),
    submitInput = form[0].querySelector('input[type = "submit"]');

function getDataForm(e) {
    e.preventDefault();
    var formData = new FormData(form[0]);
    alert(formData.get('name') + '-' + formData.get('tg') + '-' + formData.get('nom_tel') + formData.get('osebe'));
}

document.addEventListener('DOMContentLoaded', function () {
    submitInput.addEventListener('click', getDataForm, false);
}, false);

function myFunction() {
    let name = document.querySelector("#name");
    let users_added_name = document.querySelector("#users_added_name");
    users_added_name.innerHTML = name.value;

    // let nom_tel = document.querySelector("#nom_tel");
    // let users_nom_tel = document.querySelector("#users_nom_tel");
    // users_nom_tel.innerHTML = nom_tel.value;

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

// const realFileBtn = document.getElementById("real-file");
// const fileinputBtn = document.getElementById("file-input");
// const customTxt = document.getElementById("custom-text");

// customBtn.addEventListener("click", function(){
//     realFileBtn.click();
// });

// realFileBtn.addEventListener("change", function() {
//     if (realfileBtn.value) {
//         customTxt.innerHTML = realFileBtn.value.match();
//     } else {
//         customTxt.innerHTML = "No file chosen yet";
//     }
// });

function handleImageUpload() 
{

var image = document.getElementById("real-file").files[0];

    var reader = new FileReader();

    reader.onload = function(e) {
      document.getElementById("display-image").src = e.target.result;
    }

    reader.readAsDataURL(image);

} 

// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();
//         reader.onload = function (e) {
//             $('#blah').attr('src', e.target.result).width(150).height(200);
//         };
//         reader.readAsDataURL(input.files[0]);
//     }
// }

//here i'm getting the age

function submitBday() {
    let Bdate = document.getElementById('date-input').value;
    let Bday = +new Date(Bdate);
    let Q4A = ~~((Date.now() - Bday) / (31557600000)) + " лет";
    let theBday = document.getElementById('users_added_years');
    theBday.innerHTML = Q4A;
}



// dropdowns
const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach(dropdown => {
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    select.addEventListener('click', () => {
        select.classList.toggle('select-clicked');
        caret.classList.toggle('caret-rotate');
        menu.classList.toggle('menu-open');
    });
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;
            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');
            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        });
    });
});


//styling fields
formInputs.forEach(input)
{
    if (input.value == '') {
        console.log('input empty');
        input.classList.add('error');
        let a = "#" + String(input.name) + 'empty';
        console.log(a);
        document.querySelector(a).textContent = 'Обязательное поле';
    }
    else {
        input.classList.remove('error');
    }
}

