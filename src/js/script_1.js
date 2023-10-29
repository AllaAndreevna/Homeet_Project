// const form = document.getElementById('wrapper');

// function retrieveFormValue(event) {
//     event.preventDefault();

//     const fields = document.querySelectorAll('name, gender, date_of_birth, tg, nom_tel, osebe, info');
//     const values = {};

//     fields.forEach(field => {
//         const { name, value } = field;

//         values[name] = value;

//     });


// try {
//     text.addEventListener('click', () => {
//         console.log('script_1', values);
//     });
// } catch (error) {
//     console.log(error);

//     console.log('script_1', values)
// }
// const form = document.getElementById('wrapper');

// const form = document.getElementById('wrapper');

// function retrieveFormValue(event) {
//     event.preventDefault();

//     const name = form.querySelector('[name = "name"]');
//     const values = {
//         name: name.value
//     };
//     console.log("script_1", values);
// }
// form.addEventListener('submit', retrieveFormValue);


// form.addEventListener('submit', retrieveFormValue);

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

    let nom_tel = document.querySelector("#nom_tel");
    let users_nom_tel = document.querySelector("#users_nom_tel");
    users_nom_tel.innerHTML = nom_tel.value;


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
