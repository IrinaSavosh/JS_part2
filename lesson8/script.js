// В html создать элемент checkbox и текст рядом с ним “Согласен с условиями”
// ok
// Добавить кнопку отправить
// При клике на кнопку отправить нужно проверять выбран ли активным элемент checkbox
// Если элемент не выбран, добавить текст под чекбоксом “Необходимо согласиться с условиями”

const inp = document.querySelector("#check");
const btn = document.querySelector("button");
const form = document.querySelector("form");
let errMessage = false;

btn.addEventListener("click", (e) => {
	e.preventDefault();

	if (!inp.checked && !errMessage) {
		const p = document.createElement("p");
		p.textContent = "Необходимо согласиться с условиями";
		btn.insertAdjacentElement("afterend", p);
		errMessage = true;
	} else if (inp.checked) {
		form.submit();
	}
});

// В html создать 2 элемента радио кнопки (input type=”radio”) и текст “Чай”, “Кофе” соответственно
// Кнопка отправить
// Если выбран чай, необходимо вывести сообщение “Чай закончился”
// Если выбран кофе, необходимо вывести соообщение “кофе закончился”

const buttonD = document.querySelectorAll("button")[1];
// console.log(button);
const drink = document.querySelectorAll("[name = drink]");

buttonD.addEventListener("click", (e) => {
	e.preventDefault();
	drink.forEach((buttonD) => {
		if (buttonD.checked) {
			if (buttonD.id === "coffee") {
				const p1 = document.createElement("p");
				p1.textContent = "кофе закончился";
				buttonD.insertAdjacentElement("afterend", p1);
			} else if (buttonD.id === "tea") {
				const p2 = document.createElement("p");
				p2.textContent = "чай закончился";
				buttonD.insertAdjacentElement("afterend", p2);
			}
			//дублируются параграфы. Можно исправит по аналогии с предыдущим заданием
		}
	});
});

// Создать поле ввода (пароль)
// Кнопка отправить
// Если пользователь вводит текст “пароль” то поле ввода должно быть подсвечено зеленым цветом
// Если пароль неверный, у поля ввода появляется красная обводка и текст “пароль неверный”

const but = document.querySelectorAll("button")[2]; //чтобы не комментр=ировать часть кода, выбираю элементы из массива элементов
console.log(but);
const pass = document.querySelector("#pass");
const formTwo = document.querySelector("form");

but.addEventListener("click", (e) => {
	e.preventDefault();
	if (pass.value.toLowerCase() === "пароль") {
		pass.style.border = "1px solid green";
		form.submit();
	} else {
		pass.style.border = "1px solid red";
		pass.value = "";
		pass.placeholder = "пароль неверный";
		
	}
});

// Создать поле ввода и под ним заголовок h1 с текстом “Заголовок”
// При вводе текста в поле ввода необходимо чтобы текст внутри заголовка менятся на введенный в поле ввода

//интерактивный ввод
const inPut = document.querySelector("#input");
const h1 = document.querySelector("h1");

inPut.addEventListener('input', () => {
	h1.textContent = inPut.value;
});
