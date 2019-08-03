// slider
var index = 1;
showSlide(index);

function changeSlide(n) {
  showSlide(index += n);
}

function showSlide(n) {
  var slides = document.getElementsByClassName("item-slide");
  if (n > slides.length) index = 1;
  if (n < 1) index = slides.length;

  slidesLength = slides.length;
  for (var i = 0; i < slidesLength ; i++) {
      slides[i].style.display = "none";  
  }
  slides[index-1].style.display = "block";
}

// lazy load images
window.onscroll= function(){
	lazyload();
};

function elementInViewport(el){
	var rect = el.getBoundingClientRect();

	return (rect.top >= 0 && 
			rect.left >= 0 && 
			rect.bottom <= window.innerHeight &&
			rect.right <= window.innerWidth);
}

function lazyload(){

	var lazyImages = document.getElementsByClassName('lazy');

	var lengthImages = lazyImages.length;

	for (var i = 0; i < lengthImages; i++) {

		if(elementInViewport(lazyImages[i])){

			var dataSrc =  lazyImages[i].getAttribute('data-src');

			lazyImages[i].setAttribute('src', dataSrc);
		}
	}

}