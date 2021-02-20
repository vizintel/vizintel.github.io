// https://www.aleksandrhovhannisyan.com/blog/responsive-navbar-without-bootstrap/

const navbar = document.getElementById('navbar');
const navbarToggle = navbar.querySelector('.navbar-toggle');
const navbarMenu = navbar.querySelector('.navbar-menu');
const navbarLinksContainer = navbar.querySelector('.navbar-links');

function openMobileNavbar() {
	navbar.classList.add('opened');
	navbarToggle.setAttribute('aria-label', 'Close navigation menu.');
}

function closeMobileNavbar() {
	navbar.classList.remove('opened');
	navbarToggle.setAttribute('aria-label', 'Open navigation menu.');
}

navbarToggle.addEventListener('click', () => {
	if (navbar.classList.contains('opened')) {
		closeMobileNavbar();
	} else {
		openMobileNavbar();
	}
});

navbarLinksContainer.addEventListener('click', (clickEvent) => {
	clickEvent.stopPropagation();
})

navbarMenu.addEventListener('click', closeMobileNavbar);