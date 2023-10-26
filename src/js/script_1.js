const form = document.getElementById('form');

function retrieveFormValue(event) {
    event.preventDefault();

    const fields = document.querySelectorAll('name, gender, date_of_birth, tg, nom_tel, osebe, info');
    const values = {};

    fields.forEach(field => {
        const { name, value } = field;

        values[name] = value;

    });


    // try {
    //     text.addEventListener('click', () => {
    //         console.log('script_1', values);
    //     });
    // } catch (error) {
    //     console.log(error);

    //     console.log('script_1', values)
    // }

    form.addEventListener('submit', retrieveFormValue);


    