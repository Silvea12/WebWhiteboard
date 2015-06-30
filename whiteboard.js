var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');

canvas.style.position = "absolute";
canvas.style.top = 0;
canvas.style.left = 0;
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.style.margin = 0;
canvas.style.padding = 0;

document.addEventListener('scroll', function(evt) {
	if (canvas.height < window.innerHeight + evt.pageY)
		canvas.height = window.innerHeight + evt.pageY;
	if (canvas.width < window.innerWidth + evt.pageX)
		canvas.width = window.innerWidth + evt.pageX;
});
