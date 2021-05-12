document.querySelectorAll('.contenedor-img .overlay').forEach((el) => {
	el.addEventListener('click', function (ev) {
		ev.stopPropagation();
		this.parentNode.classList.add('active');
	});
});

document.querySelectorAll('.contenedor-img').forEach((el) => {
	el.addEventListener('click', function (ev) {
		this.classList.remove('active');
	});
});
