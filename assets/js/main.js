"use strict";

function noise() {
	var n = document.createElement("canvas");
	(n.id = "noise"), document.getElementsByTagName("main")[0].appendChild(n);

	var e,
		t,
		i,
		o,
		a = [],
		d = 0,
		r = function () {
			for (var n = t.createImageData(i, o), e = new Uint32Array(n.data.buffer), d = e.length, r = 0; r < d; r++)
				Math.random() < 0.5 && (e[r] = 4278190080);
			a.push(n);
		};
	(e = document.getElementById("noise")),
		(t = e.getContext("2d")),
		(function () {
			(i = window.innerWidth), (o = window.innerHeight), (e.width = i), (e.height = o);
			for (var n = 0; n < 10; n++) r();
			!(function n() {
				5 === d ? (d = 0) : d++,
					t.putImageData(a[d], 0, 0),
					window.setTimeout(function () {
						window.requestAnimationFrame(n);
					}, 50);
			})();
		})();
}

noise();

console.log("⧜");

window.onload = () => {
	if ("serviceWorker" in navigator) {
		navigator.serviceWorker.register("./sw.js");
	}
};
