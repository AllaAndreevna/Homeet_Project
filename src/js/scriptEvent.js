const btn = document.querySelector('#button');
const btns = document.querySelectorAll('button');

// btn.addEventListener('click', () => { // событие клика
// 	alert('click');
// })

btn.addEventListener('click', (event) => { // событие клика
	console.log(event.target.style.backgroundColour = 'black');
})

// btn.addEventListener('mouseenter', () => { //событие наведения 
// 	console.log('hover');
// })

// Удаляем обработчик события
// let i = 0;
// const printElement = (e) => {
// 	console.log(e);
// 	i++;
// 	if (i > 1) {
// 		btn.removeEventListener('click', printElement);
// 	}
// }
// btn.addEventListener('click', printElement)


// предотвращаем стандартное поведение браузера
const link = document.querySelector('a');

link.addEventListener('click', (e) => {
	e.preventDefault();
	console.log('Click on the link');
})

// Обработчик событий на псевдомассив
btns.forEach(btn => {
	btn.addEventListener('click', (e) => {
		console.log(e.target);
	})
})

