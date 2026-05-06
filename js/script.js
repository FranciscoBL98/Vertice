// ===============================
// MENU MOBILE
// ===============================
const menuBtn = document.querySelector('#primaryMenuBtn');
const menu = document.querySelector('.primaryMenu ul');
const menuLinks = document.querySelectorAll('.primaryMenu ul li a');

menuBtn?.addEventListener('click', () => {
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
});

menuLinks.forEach(link => {
	link.addEventListener('click', () => {
		menu.classList.remove('active');
		menuBtn.classList.remove('active');
	});
});


// ===============================
// PORTFOLIO FILTER
// ===============================
const filters = document.querySelectorAll('.portfolioBtns li.btn');
const cards = document.querySelectorAll('.portfolioGallery .card');

filters.forEach(btn => {
	btn.addEventListener('click', () => {
		document.querySelector('.portfolioBtns .active')?.classList.remove('active');
		btn.classList.add('active');

		const filter = btn.dataset.filter;

		cards.forEach(card => {
			const item = card.dataset.item;

			if (filter === 'all' || item === filter) {
				card.classList.remove('hide');
				card.classList.add('active');
			} else {
				card.classList.add('hide');
				card.classList.remove('active');
			}
		});
	});
});


// ===============================
// PORTFOLIO POPUP
// ===============================
const popupBox = document.querySelector('.portfolioPopupBox');
const popupImg = popupBox?.querySelector('img');
const popupClose = popupBox?.querySelector('span');

cards.forEach(card => {
	card.addEventListener('click', () => {
		const img = card.querySelector('img');
		if (!img) return;

		popupBox.style.display = 'block';
		popupImg.src = img.src;
	});
});

popupClose?.addEventListener('click', () => {
	popupBox.style.display = 'none';
});

// cerrar al hacer click fuera
popupBox?.addEventListener('click', (e) => {
	if (e.target === popupBox) {
		popupBox.style.display = 'none';
	}
});


// ===============================
// STICKY NAVBAR
// ===============================
const menuBar = document.querySelector('.homeSection .primaryMenu');

window.addEventListener('scroll', () => {
	menuBar?.classList.toggle('stickyMenuBar', window.scrollY > 250);
});


// ===============================
// SCROLL ANIMATIONS
// ===============================
const revealElements = document.querySelectorAll(
	'.reveal, .reveal-left, .reveal-right, .reveal-zoom'
);

const observer = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		if (entry.isIntersecting) {
			entry.target.classList.add('active');
			observer.unobserve(entry.target);
		}
	});
}, { threshold: 0.2 });

revealElements.forEach(el => observer.observe(el));


// ===============================
// TOOLTIP WHATSAPP
// ===============================
const tooltip = document.getElementById('wspTooltip');

if (tooltip) {
	setTimeout(() => {
		tooltip.style.display = 'none';
	}, 5000);
}