function elementAdder(){
	let toDoObject = document.querySelector("#titleList").value;
	console.log(toDoObject);

	let newElement = document.createElement('div');
	newElement.className= 'noviZadatak'
	newElement.innerText = toDoObject;

	// Create a remove button (the "x")
    let removeButton = document.createElement('span');
    removeButton.innerText = '                               x'; // Add some space before 'x'
    removeButton.className = 'close-btn'; // You can add some styles to this class
    removeButton.style.cursor = 'pointer'; // Make it look clickable

    // Append the remove button to the new div
    newElement.appendChild(removeButton);

    // Add event listener to remove the div when "x" is clicked
    removeButton.addEventListener('click', function() {
        newElement.remove(); // Removes the div
    });

	document.querySelector('.container').appendChild(newElement);


}



//<button onclick="inflationCalculator()">Add</button> 