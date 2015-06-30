var canvas = document.createElement('canvas');
document.body.appendChild(canvas);
var ctx = canvas.getContext('2d');
canvas.style.position = 'absolute';
canvas.style.top = 0;
canvas.style.left = 0;
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;
canvas.style.overflow = 'hidden';
canvas.style.margin = 0;
canvas.style.padding = 0;
canvas.style['z-index'] = 2000000000;
canvas.style.cursor = "crosshair";
ctx.lineStyle = '#000000';
ctx.fillStyle = '#000000';
var clicking = false;
var needsRefresh = false;
canvas.addEventListener('mousedown', function(evt) {
	ctx.moveTo(evt.pageX, evt.pageY);
	clicking = true;
});
canvas.addEventListener('mouseup', function() {
	clicking = false;
});
var refresh = function() {
	if (needsRefresh)
	{
		ctx.stroke();
		needsRefresh = false;
	}
	requestAnimationFrame(refresh);
};
refresh();
canvas.addEventListener('mousemove', function(evt) {
	if (clicking)
	{
		ctx.lineTo(evt.pageX, evt.pageY);
		needsRefresh = true;
	}
});
document.addEventListener('scroll', function(evt) {
	if (canvas.height < window.innerHeight + window.pageYOffset)
		canvas.height = window.innerHeight + window.pageYOffset;
	if (canvas.width < window.innerWidth + window.pageXOffset)
		canvas.width = window.innerWidth + window.pageXOffset;
});
