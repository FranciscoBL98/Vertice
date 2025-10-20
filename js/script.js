
// *****   JavaScript Code For Home Section Starts   *****  

// Access The required elements and store it in variables
var menu_btn = document.querySelector('#primaryMenuBtn');
var menu = document.querySelector('.primaryMenu ul');
var menuItems = document.querySelectorAll('.primaryMenu ul li a');

// Add a click event to the hamburger button
menu_btn.addEventListener('click', function () {
	menu_btn.classList.toggle('active');
	menu.classList.toggle('active');
});

// Loop through all the menu items and add a click event
for (let i = 0; i < menuItems.length; i++) {
	menuItems[i].addEventListener('click', menuFunction);
}
function menuFunction() {
	menu.classList.remove('active');
	menu_btn.classList.remove('active');
}

// *****   JavaScript Code For Home Section Ends   *****  


//  *****   JavaScript Code For Portfolio Section Starts   *****

// Access the necessary html elements and store it variables
var allFilters = document.querySelectorAll('.portfolioBtns li.btn');
var allCards = document.querySelectorAll('.portfolioGallery .card');

// Add a click event to the buttons
for (var i = 0; i < allFilters.length; i++) {
	allFilters[i].addEventListener('click', filterFunction);
}
// Define the function
function filterFunction() {
	// Access the active button
	var activeTab = document.querySelector('.portfolioBtns .active');
	// Remove the active class from the button
	activeTab.classList.remove('active');
	// Add active class to the button which is clicked
	this.classList.add('active');

	// Get the value of the 'data-filter' attribute of the clicked button
	var filter = this.getAttribute('data-filter');

	// Check if any other button is clicked except the 'all' (All Work) button
	// if condition is true,
	// then hide all other cards, except those related to the clicked button
	if (filter != 'all') {
		for (let i = 0; i < allCards.length; i++) {
			allCards[i].classList.add('hide');
			var currentItem = allCards[i].getAttribute('data-item');
			if (currentItem == filter) {
				allCards[i].classList.add('active');
				allCards[i].classList.remove('hide');
			}
		}
	}
	// otherwise display all the cards
	else {
		for (let i = 0; i < allCards.length; i++) {
			allCards[i].classList.remove('hide');
			allCards[i].classList.add('active');
		}
	}
}

// Add a click event to all the cards
for (let i = 0; i < allCards.length; i++) {
	allCards[i].addEventListener('click', popupFunction);
}
// if a card is clicked then display the bopup box and show the related image
function popupFunction() {
	document.querySelector('.portfolioPopupBox').
		style.display = 'block';
	document.querySelector('.portfolioPopupBox img').
		src = this.querySelector('.imgBox img').getAttribute('src');
}

// When you click the cancel button, then hide the popup box
document.querySelector('.portfolioPopupBox span').
	addEventListener('click', function () {
		document.querySelector('.portfolioPopupBox').style.display = 'none';
	});

//  *****   JavaScript Code For Portfolio Section Ends   *****





//  *****   JavaScript Code For Sticky Menubar Starts   ***** 

var menuBar = document.querySelector('.homeSection .primaryMenu');
window.addEventListener('scroll', scrollFunction);
function scrollFunction() {
	menuBar.classList.toggle('stickyMenuBar', window.scrollY > 250);
}

//  *****   JavaScript Code For Sticky Menubar Ends   ***** 


// ***** Animaciones al hacer scroll *****

const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-zoom');

const observer = new IntersectionObserver((entries) => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('active');
			observer.unobserve(entry.target); // Evita que se repita
		}
	});
}, { threshold: 0.2 });

revealElements.forEach(el => observer.observe(el));
