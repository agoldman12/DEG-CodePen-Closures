/*
Goal: Learn about closures in a common use-case

Task: Complete the onButtonClick method to print out the value and index of each button

Hint: A closure can access variables defined in its outer function.

*/

const messageEl = document.querySelector('.message');

const buttonEls = [...document.querySelectorAll('button')];

// edit this method to display the value and index of the clicked button
function onButtonClick() {
	messageEl.innerHTML = '';

	const printValues = function(){
		buttonEls.forEach(function(buttonEl){
			messageEl.innerHTML = buttonEl.value + " from button # "
			
		});
	}
	return printValues();   
}



//add event listener to each button
for (let i = 0; i < buttonEls.length; i++) {
	buttonEls[i].addEventListener('click', onButtonClick)
}

/*
buttonEls.forEach(function(buttonEl){
	   		 console.log(buttonEl.value);
	   		 messageEl.innerHTML = buttonEl.value + " from button # "
	    });
*/