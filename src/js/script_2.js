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

// const image_input = document.querySelector("#image_input");
// var uploaded_image = "";

// image_input.addEventListener("change", function(){
//     const reader = new FileReader();
//     reader.addEventListener("load", () => {
//         uploaded_image = reader.result;
//         document.querySelector("#preview").style.backgroundImage = `url(${uploaded_image})`;

//     });
//     reader.readAsDataURL(this.files[0]);
// });




// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();
//         reader.onload = function (e) {
//             $('#blah').attr('src', e.target.result).width(150).height(200);
//         };
//         reader.readAsDataURL(input.files[0]);
//     }
// }


// let uploadButton = document.querySelector('input[type="file"]')
// uploadButton.addEventListener('change', (e) => {
//     const currFiles = e.target.files
//     if (currFiles.length > 0) {
//         let src = URL.createObjectURL(currFiles[0])
//         let imagePreview = document.getElementById('preview')
//         imagePreview.src = src
//         imagePreview.style.display = "block"
//     }
// })

// function readURL(input) {
//     if (input.files && input.files[0]) {
//         var reader = new FileReader();

//         reader.onload = function(e) {
//             // Create an image element
//             var img = document.createElement("img");
//             img.src = e.target.result;

//             // Append the image to a container element on your page
//             var container = document.getElementById('preview');
//             container.innerHTML = ""; // Clear previous content
//             container.appendChild(img);
//         };

//         // Read the file as a data URL
//         reader.readAsDataURL(input.files[0]);
//     }
// }

// document.getElementById('image_input').addEventListener('change', function (e) {
//     readURL(e.target);
// });
// function readURL(input) {
//     if (input.files && input.files[0]) {
//       var reader = new FileReader();

//       reader.onload = function(e) {
//         // Create an image element
//         var img = document.createElement("img");
//         img.src = e.target.result;
//         // img.width = 300;

//         // Append the image to a container element on your page
//         var container = document.getElementById('preview');
//         container.innerHTML = ""; // Clear previous content
//         container.appendChild(img);
//       };

//       // Read the file as a data URL
//       reader.readAsDataURL(input.files[0]);
//     }
//   }




// document.getElementById('image_input').addEventListener('change', function (e) {
//     var file = e.target.files[0];
//     var reader = new FileReader();

//     reader.onload = function (event) {
//         var imgSrc = event.target.result;
//         var previewImg = document.getElementById('preview');
//         previewImg.src = imgSrc;
//     };

//     reader.readAsDataURL(file);
// });




document.getElementById('image_input').addEventListener('change', function (e) {
    var file = e.target.files[0];
    var reader = new FileReader();

    reader.onload = function (event) {
      var imgSrc = event.target.result;
      var previewImg = document.getElementById('preview');

      // Update the existing attributes with new values
      previewImg.src = imgSrc;
      previewImg.alt = "Downloaded photo";
      previewImg.width = 140;
      previewImg.style.marginBottom = "12px";
    };

    reader.readAsDataURL(file);
  });

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

// moving hovers

const input = document.getElementById('name');
const label = document.querySelector('.form__label');

input.addEventListener('focus', () => {
    label.classList.add('active');
});

input.addEventListener('blur', () => {
    if (input.value === '') {
        label.classList.remove('active');
    }
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





$(".select1").hover(function () {
    $(this).siblings(".myOptions1").css("display", "block");
    $(this).css("background-color", "grey");
}, function () {
    $(this).siblings(".myOptions1").css("display", "none");
});
$(".myOptions1").hover(function () {
    $(this).css("display", "block");
}, function () {
    $(this).css("display", "none");
    $(this).siblings(".select1").css("background-color", "#ddd");
});
$(".option1").hover(function () {
    $(this).css("background-color", "#123456");
}, function () {
    $(this).css("background-color", "#ddd");
    var selection = $(this).html();
    if (selection == $(this).parent().siblings(".select1").html()) $(this).css("background-color", "grey");
});
$(".option1").click(function () {
    var selection = $(this).html();
    $(this).parent().siblings(".select1").html(selection);
    $(this).siblings().css("background-color", "#ddd");
    $(this).css("background-color", "grey");
});
