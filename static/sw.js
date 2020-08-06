var cacheName = "u29dc",
	filesToCache = ["/", "/index.html", "/css/main.css", "/js/main.js"];

// start the service worker and cache content
self.addEventListener("install", function (e) {
	e.waitUntil(
		caches.open(cacheName).then(function (cache) {
			return cache.addAll(filesToCache);
		})
	);
});

// serve cached content when offline
self.addEventListener("fetch", function (e) {
	e.respondWith(
		caches.match(e.request).then(function (response) {
			return response || fetch(e.request);
		})
	);
});
