const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/style.css",
  "/script.js",
  "/coffee1.jpg",
  "/coffee2.jpg",
  "/coffee3.jpg",
  "/coffee4.jpg",
  "/coffee5.jpg",
  "/coffee6.jpg",
  "/coffee7.jpg",
  "/coffee8.jpg",
  "/coffee9.jpg",
]

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticDevCoffee).then(cache => {
      cache.addAll(assets)
    })
  )
})

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request)
    })
  )
})