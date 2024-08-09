const url = "./data.json";
async function getData(url) {
	try {
		const response = await fetch(url);
		const data = await response.json();
		return data;
	} catch (error) {
		console.log(error.message);
	}
}

document.addEventListener("DOMContentLoaded", async (e) => {
	const data = await getData(url);
	const list = document.querySelector(".productBox");
	data.forEach((element) => {
		list.insertAdjacentHTML(
			"beforeend",
			`<div class="product">
				<img class="product__img" src="${element.img}" alt="product" />
				<div class="product__content">
					<a href="#" class="product__name">${element.title}</a>
					<p class="product__text">
						${element.description}
					</p>
					<p class="product__price">$${element.price}</p>
				</div>
			</div>`
         
		);
      console.log("загрузка");
	});
});
