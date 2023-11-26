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

// const fileInput = document.getElementById('image_input');
// const previewImage = document.getElementById('preview_image');

// fileInput.addEventListener('change', function() {
//   const file = fileInput.files[0];
//   const reader = new FileReader();

//   reader.addEventListener('load', function() {
//     // Set the source of the image element to the loaded file
//     previewImage.src = reader.result;
//   });

//   if (file) {
//     // Read the selected file as a data URL
//     reader.readAsDataURL(file);
//   }
// });

// document.getElementById('image_input').addEventListener('change', function (e) {
//     var file = e.target.files[0];
//     var reader = new FileReader();

//     reader.onload = function (event) {
//         var imgSrc = event.target.result;
//         var previewImg = document.getElementById('preview');

//         // Update the existing attributes with new values
//         previewImg.src = imgSrc;
//         previewImg.alt = "Downloaded photo";
//         previewImg.width = 140;
//         previewImg.style.marginBottom = "12px";
//     };

//     reader.readAsDataURL(file);
// });


//here i'm getting the age

function submitBday() {
    let Bdate = document.getElementById('date-input').value;
    let Bday = +new Date(Bdate);
    let Q4A = ~~((Date.now() - Bday) / (31557600000)) + " лет";
    let theBday = document.getElementById('users_added_years');
    theBday.innerHTML = Q4A;
}


