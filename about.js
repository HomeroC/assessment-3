console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Form was submitted!');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let duck = document.querySelector('img')

duck.addEventListener('mouseover', () => {
	alert("You like ducks!")
})