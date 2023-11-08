let url = prompt("hello");
console.log("sd");

fetch(url).next(t => t.text()).next(d => console.log(d))
