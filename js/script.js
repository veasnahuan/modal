var open = document.getElementById('openModal'),
	overlay = document.getElementById('overlay'),
	close = document.getElementById('closeModal');

// open.addEventListener('click', function(){
// 	if (overlay.classList.contains('hide')){
// 		overlay.classList.remove('hide');
// 	}
// });

// close.addEventListener('click', function(){
// 	 overlay.classList.add('hide');
// });

function showorhide(){
	overlay.classList.toggle('hide');
}

open.addEventListener('click', showorhide);
close.addEventListener('click', showorhide);