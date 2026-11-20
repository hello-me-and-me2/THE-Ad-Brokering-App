// Offline support: the app shell is cached when the service worker
// installs, and every same-origin request goes network-first (so a
// deploy is picked up right away) with the cache as the fallback when
// there's no connection. Bump CACHE to drop everything cached before.
var CACHE = 'tba-v3';
var CORE = [
  "404.html",
  "about.html",
  "admin-contracts.html",
  "admin-reports.html",
  "admin-signin.html",
  "admin-user.html",
  "admin-users.html",
  "admin-verifications.html",
  "admin.html",
  "businesses.html",
  "calendar.html",
  "help.html",
  "home.html",
  "index.html",
  "influencers.html",
  "login.html",
  "messaging.html",
  "network.html",
  "privacy.html",
  "profile.html",
  "search.html",
  "settings.html",
  "signup.html",
  "terms.html",
  "videos.html",
  "assets/about.css",
  "assets/admin-contracts.css",
  "assets/admin.css",
  "assets/calendar.css",
  "assets/home.css",
  "assets/landing.css",
  "assets/messaging.css",
  "assets/network.css",
  "assets/profile.css",
  "assets/settings.css",
  "assets/signin.css",
  "assets/videos.css",
  "assets/bg/business.svg",
  "assets/bg/creator.svg",
  "assets/bg/landing.svg",
  "assets/bg/signup.svg",
  "assets/users-data.js",
  "assets/auth.js",
  "assets/icon-192.png",
  "manifest.webmanifest"
];

self.addEventListener('install', function (event) {
  event.waitUntil(caches.open(CACHE).then(function (cache) { return cache.addAll(CORE); }).then(function () { return self.skipWaiting(); }));
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('fetch', function (event) {
  var req = event.request;
  var url = new URL(req.url);
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

  event.respondWith(
    fetch(req).then(function (res) {
      if (res && res.ok) {
        var copy = res.clone();
        caches.open(CACHE).then(function (cache) { cache.put(req, copy); });
      }
      return res;
    }).catch(function () {
      return caches.match(req).then(function (hit) {
        if (hit) return hit;
        if (req.mode === 'navigate') return caches.match('index.html');
        return Response.error();
      });
    })
  );
});
