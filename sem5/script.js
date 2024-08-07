const div1 = document.createElement("div");
const body1 = document.querySelector("body");
body1.appendChild(div1);

const parseData = JSON.parse(data1);
console.log(parseData);

parseData.message.forEach((element) => {
	div1.insertAdjacentHTML(
		"beforeend",
		`
      <figure>
      <img src ='${element}'>
      <figcaption>Какой-то текст</figcaption>
      </figure>`
	);
});

const url1 = "https://jsonplaceholder.typicode.com/users";
async function getData(url1){
   const response = await fetch(url1);
   const json = await response.json()
   return json;
}
try {
   const myData = await getData(url1);
   console.log(myData);
   myData.forEach(element=>{
      div1.insertAdjacentHTML("beforeend", `
         <h2>${element.name}</h2>
         <p>$${element.email}</p>`)
   })
} catch (error) {
   console.log(`Ошибка ${error.message}`);
}


