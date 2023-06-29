'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "c572aa57f235fb2a6191ea7f4c026261",
".git/config": "5bfb552465b99af9e7fa890778b21ee9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "eb80b37b67e8dd347fa92f1772e57baf",
".git/GITGUI_MSG": "8e6df42fec6c2a737ec9c37220a2469c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "6c297d26d17f8a5b0cf5620953e287a9",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/info/refs": "a0b5bd27dd7a6946af47427338b07aed",
".git/logs/HEAD": "d9aea527aef3e5b3a3edd86554d35261",
".git/logs/refs/heads/main": "e519eb00a61c8e1c025696fa37c40330",
".git/logs/refs/remotes/origin/main": "5f2dc303bcc0e5d88806ce9dde4421bc",
".git/objects/info/commit-graph": "7fbab24872e7537b6b46f2b8c4c5ce61",
".git/objects/info/packs": "48acfe2fb4cc996179380a09ab51aef4",
".git/objects/pack/pack-91e8a0bf23464c46aebb91cfe3d1d8cf4c3fb075.idx": "bde73fdc36c38d0907237ce67cf0c9c1",
".git/objects/pack/pack-91e8a0bf23464c46aebb91cfe3d1d8cf4c3fb075.pack": "9854e021543b110c2169cc5ba383038b",
".git/packed-refs": "97cab30686f2e6b11f17c3fe332308af",
"assets/AssetManifest.json": "2a71e88998d520bbfd264a743db42f75",
"assets/assets/fonts/CustomIcons.ttf": "ed49e4909d1df8b00f48d2db12a4ad9c",
"assets/assets/images/blob_ash.png": "f76b87a8dd8bb4ad017b441854541a2b",
"assets/assets/images/blob_bean_ash.png": "bc902ac538eedf1abc48457bbf064fd1",
"assets/assets/images/blob_black.png": "14198d608b7f0980998d329cd353e290",
"assets/assets/images/blob_drumstick_black.png": "381f70d9f8dd4fbbb720214fa02939a2",
"assets/assets/images/blob_femur_ash.png": "b899f92250a0f7220db5c45bea2080c8",
"assets/assets/images/blob_small_bean_ash.png": "411605e065607a48e110cedc91bebd82",
"assets/assets/images/blog_01.jpg": "39039f5d6a02c6cad7c6d367ac90acf0",
"assets/assets/images/blog_01_1.jpg": "cd78990246f63c4d64ca5c26bcf31289",
"assets/assets/images/blog_02.jpg": "3bd84c0783cf6ef72a2746afdee8345e",
"assets/assets/images/blog_02_1.jpg": "01c4b84663980a0b4f55f4bd196492bd",
"assets/assets/images/blog_03.jpg": "5f88a99b651c6dbad988d684c6fc41b3",
"assets/assets/images/box_cover_dark.png": "34f90bdba46732221c608605016c40d5",
"assets/assets/images/box_cover_gold.png": "a58f0270c1fd04d7eae1217c7e5645b9",
"assets/assets/images/dev_aboutme%2520-%2520Shortcut.lnk": "be15a0d23b675a63ee6c447e7b48d92b",
"assets/assets/images/dev_aboutme.png": "0630ec9068500e7df1f56c8f1d623cfc",
"assets/assets/images/dev_aboutme1.png": "21ea8f79cfc69b619c767fa9573b5295",
"assets/assets/images/dev_award.png": "ddd127d772e63627cceaf4637255e07a",
"assets/assets/images/dev_award1.png": "9330277f7c4279bb73c0f637f6871af1",
"assets/assets/images/dev_header.png": "aa026f43515fb905acd03e4dbd84e26d",
"assets/assets/images/dev_header1.png": "6e4b03020cee4b554c35ef65a45b0a05",
"assets/assets/images/dots_globe_grey.png": "bb16bba932c2e98f3dbe3e6b1b6a864b",
"assets/assets/images/dots_globe_yellow.png": "d908b032e1a46382b6e6c2baf92e188c",
"assets/assets/images/dots_globe_yellow2.png": "d1394584431e43b6973ca031de59a284",
"assets/assets/images/ghana_flag.png": "b0afee866ab3333560a0072c5d53bce2",
"assets/assets/images/hi_there.png": "1ac6f5101b6a5511f4ad8f8965a49f89",
"assets/assets/images/icon_box.jpg": "7a18b9b091db5fe0fc16c76a3ffd5db2",
"assets/assets/images/indian_flag.jpg": "13e1a5a7b39edc548cb53b557e11d44c",
"assets/assets/images/leetcode.png": "282e631eb2036b7b6836391fc092eb5e",
"assets/assets/images/logo_dark.png": "9420fa2d6b8bd3e6664cb3ed0f016bdc",
"assets/assets/images/logo_dark1.png": "172c6851a256eb6ca04d9b99cc231ac8",
"assets/assets/images/logo_light.png": "e11e28127baccf6857d660bb88ea7505",
"assets/assets/images/logo_light1.png": "708b0d915b6cededbda03f881683e529",
"assets/assets/images/portfolio_01.png": "b03b1c740c2f21d4815d4fa1cd93ef42",
"assets/assets/images/portfolio_01_1.jpg": "43e7af9f9e24c8c4db73ee7d493c04f4",
"assets/assets/images/portfolio_02.jpeg": "edcf19aae352638c9933852ab4972d2f",
"assets/assets/images/portfolio_02_1.jpg": "9beba509a25cfb96362aeb7e98335e58",
"assets/assets/images/portfolio_03.png": "1d329a82b7aeef38b53522089b1293c7",
"assets/assets/images/portfolio_03_1.jpg": "45d7db96b72f25b4c76740e5dec2208e",
"assets/assets/images/portfolio_04.png": "b03b1c740c2f21d4815d4fa1cd93ef42",
"assets/assets/images/portfolio_04_1.jpg": "ff07b0c6397e19d0cf30b03df9f196d2",
"assets/assets/images/portfolio_05.png": "544465b1346d0385d3f2e206dcb0ad20",
"assets/assets/images/portfolio_05_1.jpg": "9e5fedca2725d59b2692670505c8e7e5",
"assets/assets/images/portfolio_06.png": "323595fa7be7a50cce63d6a9910b6c30",
"assets/assets/images/portfolio_06_1.jpg": "015d9a88eeaa1a0f5e39b81d32e1bf87",
"assets/FontManifest.json": "8431a54e953c7b219644e4c7bb86d767",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "cd8fa167251a1083526868f27e62bece",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/feather_icons/fonts/feather.ttf": "ad5435302c3c2d1f23f275d0f22d36c6",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/logo.png": "ab00f52b2f61c5e59e7f468045cb8a89",
"icons/logo1.png": "508623330cb0250a035dd873fcc2ab9b",
"index.html": "664d37c8c6dfde483c6bfe1df0661902",
"/": "664d37c8c6dfde483c6bfe1df0661902",
"main.dart.js": "9efbf211ee56d802f39cb9fadafddab3",
"manifest.json": "29c8b9c0d37f245c6201d0fcdfc62145",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
