const box = document.querySelector('#box'), // поиск по id
	wrapper = document.querySelector('.wrapper'),
	hearts = wrapper.querySelectorAll('.heart'), // такой вариант тоже возможен
	//hearts = document.querySelectorAll('.heart'),
	circles = document.querySelectorAll('.circle'),
	btns = document.querySelectorAll('button'),
	oneHeart = document.querySelector('.heart');
	console.dir(box);
	console.log(box);
    console.log(circles);
    circles.forEach((circle) => {
        console.log(circle);
    }}


	// изменяем стили    
	circles[0].style.borderRadius = '10px'; // один стиль
	circles.forEach(circle => circle.style.opacity = '0.5') // стили для всего псевдомассива
	box.style.cssText = 'background-color: red; border-radius: 10px'; // задаем стили строкой текста

	

	//создаем новый элемент

	const newElement = document.createElement('div');
    newElement.classList.add('black'); // добавили стилей
	newElement.classList.remove('black');
    newElement.classList.toggle('black');

	// // document.body.append(newElement); // добавили
	// // newElement.remove();
	// // document.body.prepend(newElement);
	// hearts[2].after(newElement);

    newElement.textContent = "Hello";

	// wrapper.insertAdjacentHTML('beforeend', '<h1>privet</h1>'); //вставляем элемент на страницу