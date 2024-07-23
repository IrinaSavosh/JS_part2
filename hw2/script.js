// Выполнить все задачи в теге script. Комментарии, в которых написаны задачи, не стирать, код с решением задачи пишем под комментарием.

// ```
// <p class="dropdown">Привет :)</p>
// <div class="dropdown">
// <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
// Dropdown button
// </button>
// <div class="menu dropdown-menu" aria-labelledby="dropdownMenuButton">
// <a class="dropdown-item" href="#">Action</a>
// <a class="dropdown-item" href="#">Another action</a>
// <a class="dropdown-item" href="#">Something else here</a>
// </div>
// </div>

// <script>
//     "use strict";
// []()
// []()
// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.
// []()

const elements = document.querySelectorAll(".dropdown-item");
console.log(elements);
elements.forEach((element) => {
	element.classList.add("super-dropdown");
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует у этого элемента, либо добавить, если такого класса у элемента не было.
// []()

// .classList.toggle - убрать/добавить

const btnElement = document.querySelector(".btn");
console.log(btnElement);
btnElement.classList.toggle("btn-secondary");

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".
// []()

const elementWithMenu = document.querySelector(".menu");
console.log(elementWithMenu);
elementWithMenu.classList.remove("dropdown-menu");

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
// `<a href="#">link</a>`
// []()

const divDropDown = document.querySelector(".dropdown");
console.log(divDropDown);
divDropDown.insertAdjacentHTML("afterend", '<a href="#">link</a>');

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".
// []()

const elementWithID = document.querySelector("[id = dropdownMenuButton]");
console.log(elementWithID);
elementWithID.id = "superDropdown";
// 6. Добавьте атрибут data-dd со значением 3 элементу у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.
// []()

const el = document.querySelector('[aria-labelledby = "dropdownMenuButton"]');
console.log(el);
el.setAttribute("data-dd", "3");

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const elem = document.querySelector(".dropdown-toggle");
console.log(elem);
elem.removeAttribute("type");
