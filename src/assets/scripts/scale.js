 const calcScale = size => {
 	const win = document.documentElement;
 	const html = document.querySelector('html');
 	const body = document.querySelector('body');
 	const resizeEvt = 'onorientationchange' in window ? 'orientationchange' : 'resize';
 	const resizeFun = () => {
 		const winWidth = win.offsetWidth;
 		if (!winWidth) return;
 		if (winWidth > size) {
 			html.style.fontSize = '100px';
 		} else {
 			html.style.fontSize = (100 * (winWidth / size)).toFixed(2) + 'px';
 		}
 		body.style.display = 'block';
 	};
 	resizeFun();
 	window.addEventListener('load', resizeFun, false);
 	window.addEventListener(resizeEvt, resizeFun, false);
 };
 export default calcScale;