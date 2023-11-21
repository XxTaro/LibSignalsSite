'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "b81ca2eb3c123a34159bdea3f9e427d6",
".git/config": "6808161e0e4b8eee1692f62034b731bb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "f01ada5d23bdfc8d97a8a8b3d70490c2",
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
".git/index": "101308eb6a0c4408ff03c0f3e3596a18",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "dd6ff3f5a693fefde952fbe94b61b627",
".git/logs/refs/heads/dev": "dd6ff3f5a693fefde952fbe94b61b627",
".git/logs/refs/remotes/origin/dev": "402c6cd7e35bf1804046bd8a4d264cd6",
".git/objects/00/37e5deb16500b31f36963e6d573fbaa6eb43f9": "4df86df2a218864536c2649e1517abf0",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/09/a5d15ab4895c88a29153fc2b8e98d40a3a7220": "9d46309dba0afa76c1b4eb61903bb056",
".git/objects/10/7de4df8e8e9aa0ac51e52d7241de8cc33cd79a": "4492bcd297a3da4e1ea3ab844aca3c02",
".git/objects/18/48f6af846f6e1587d831bde39420b49a9ef0b5": "57b258585ba8c74c417583d6a39f097f",
".git/objects/1c/206d6ed0e5e61bdebcf7edd9fd72dcf87e9ad8": "7b0bccab6825fb9bbd03486cc6763b7b",
".git/objects/21/05ca892c3ae21df90ba6bb55491b2d51d26869": "fc3976856404fadd9863e8cd3b52017c",
".git/objects/26/1aa9c2f2e96192f23ef4ad151c1f969a01dbec": "6d93a3bcb6d54910e098732ba11c2261",
".git/objects/26/8cba8f4987d23595a31436286b9e5e0acdca9e": "042d6ff16c08e91aa61297728d6af366",
".git/objects/2f/54b554e4e0097d97276cf805949a646eb62fa9": "343130e5916696bd3a2aa5427e32fd7e",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/39/110e6ae7ccd0813a811c525a1e194c13e811fe": "79644b4476695cdbd165326d86659257",
".git/objects/3d/07ff34761e54ef3c09089bdaea56b31ae6b01f": "d62be9a163971acf7a0938e7510b6561",
".git/objects/42/e71e0a4c739bb912b1011ec60bc3d1781e344b": "87d49da4fefe01a9ebd8d90ac23eb818",
".git/objects/43/f7cf8b9d779402427507c8e63a6bb83a14c445": "910546f310db76248394a06ac66383b6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/fe1b26d50d34ed621f63b5e36094551ccc5190": "c24a101cdd7dc570da9c5f797a7cc67f",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/51/27f7ee0231cc80a035fc683a36f086d20d1cc4": "6345cd5b9308c1365bd96b71c9c83ede",
".git/objects/55/854fed8acf6e26ffad02a7b385a6e06f43e5c7": "a0571beeaf4678e5e3522698ed464fe6",
".git/objects/69/b708dff377084f2aacfec8cbe172e439f5334b": "02c27afd7acda6e328c25cb84797e80d",
".git/objects/79/b7aad8ac35e54c0d70943c2888034e84745eb1": "c01fa98c45a5687756eab1e89022a648",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/9c/982a3266b61eb1b9db4c15387d49fd3a9dfa8b": "c80dc794a485b812601bdc1779e3e71b",
".git/objects/9f/2f2d14c062325b8f0507f4f560e5a3205c3c17": "3df6eddd19aceb3083aebe2ff0a47d75",
".git/objects/a5/255dd35c8676a13ba90e6b2d6795e4b70dd6a9": "eb0665200f4ab613a12f340ca647c8c5",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/b390915e5360601aa86b7aab105cffba8ab1cb": "436d0844f33aca064eb4ac45953cc4b8",
".git/objects/b8/59df4cf82acf0965063cb9f098ae79e31a4372": "8579301cdcfa5812bcfa3f5a70efd96c",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bd/c2298a883ca0c69f1f7c757e7b4a544fdce829": "0f8e63a0884689f62bbda71e546afa51",
".git/objects/ca/691a64a46292c2b96fabcaed3aea395f6f6bd7": "40e2fc5d2119a241ab73e1baaeb3c32a",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d0/99b781a7ffb3b6cbe8bb4fe44eae9fc5674105": "2b8c7325192b20b128894305964dcbc7",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/dbf7c317279c2d583a7d826b732a0210bae235": "97da3def904c4582d7127f2c013d65e0",
".git/objects/da/39fa7ad56293f92805d8bcaa4e013afca0f6b0": "97033a64817b95cf2d841fa530f7037b",
".git/objects/da/a3d06656edfbf8fd2f87164a9db7821cc8333d": "c5138b279390bf36d6c70070aaf110c0",
".git/objects/de/54fe926ddf2713f923fe24507233b6bb78022d": "5062c316a6e808a502e1dab5bbf1151e",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/eb/0f7f3745c353245b3684202dee6f6c6b463be2": "9d87c2c2330e8fbc6f45a11988ca5078",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f1/d98e314c16dc25ec38ab7fcebf22aea71c3a4b": "4a52e26feb983bd564cf5a16a77131a1",
".git/objects/f6/2b682c337a7b6f8314070c0ee2cec9b69a10da": "b999ad4cd3d3172eb3b65506e4472815",
".git/objects/fa/9973b086e1ee245ef2fb6b3a66e9c0e283b9f7": "2321d92c009a7e3a723124b25db939c2",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/ff/7205e3accf7d136bf285fb925e85129187c45a": "8212f214c1bf059d2b050941fc998ab2",
".git/refs/heads/dev": "03d5f9c8ac5b64bcbfa649aadabc0ecc",
".git/refs/remotes/origin/dev": "03d5f9c8ac5b64bcbfa649aadabc0ecc",
".git/tgitchangelist": "d41d8cd98f00b204e9800998ecf8427e",
"assets/AssetManifest.bin": "73feb93c87f0e97c052d48f4e425e607",
"assets/AssetManifest.json": "dc9b32436343087d24a71ffc55194aa4",
"assets/assets/hands.svg": "f57bf06d8b11cb70cfbf20569275938b",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "511d6f64f9ed1b87a505d89c501f53d5",
"assets/NOTICES": "ff9490aa0ce53779d6b993df057d64e7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/packages/youtube_player_iframe/assets/player.html": "dc7a0426386dc6fd0e4187079900aea8",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"dev/assets/AssetManifest.bin": "73feb93c87f0e97c052d48f4e425e607",
"dev/assets/AssetManifest.json": "dc9b32436343087d24a71ffc55194aa4",
"dev/assets/assets/hands.svg": "f57bf06d8b11cb70cfbf20569275938b",
"dev/assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"dev/assets/fonts/MaterialIcons-Regular.otf": "511d6f64f9ed1b87a505d89c501f53d5",
"dev/assets/NOTICES": "24648343d48f2810c0ef67ec467e7b20",
"dev/assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "f2163b9d4e6f1ea52063f498c8878bb9",
"dev/assets/packages/wakelock_plus/assets/no_sleep.js": "9c3aa3cd0b217305aa860decab3d9f42",
"dev/assets/packages/youtube_player_iframe/assets/player.html": "fedadd807717e2e72a56a1117ebb1338",
"dev/assets/shaders/ink_sparkle.frag": "9851c5ed1da0cd856f0a970c4ceae2ab",
"dev/canvaskit/canvaskit.js": "86b7517fecdb462477abb4e95ad5f7b3",
"dev/canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"dev/canvaskit/chromium/canvaskit.js": "cbcd89731b97638846e8aa972372553a",
"dev/canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"dev/canvaskit/skwasm.js": "b726c23977ffcec25ad36cb84734e7ae",
"dev/canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"dev/canvaskit/skwasm.worker.js": "4ac8aa2a7e5d7b7ec96f9be2eb82d7ae",
"dev/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"dev/flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"dev/icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"dev/icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"dev/icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"dev/icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"dev/index.html": "3d1e1ce757766b3652cf596f4509858b",
"/": "960ef93bf573c1c93cfb8af3bae45a77",
"dev/main.dart.js": "0a3cb97091b4dcfd65444216d00299e6",
"dev/manifest.json": "7431a3aaa4ebf566fc327ffdfd7c4f38",
"dev/version.json": "930109b7fafd7873cda517369e35b5e6",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "960ef93bf573c1c93cfb8af3bae45a77",
"main.dart.js": "edff4e7b02241c89d26a3c06b61617ec",
"manifest.json": "7431a3aaa4ebf566fc327ffdfd7c4f38",
"version.json": "930109b7fafd7873cda517369e35b5e6"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
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
        // Claim client to enable caching on first launch
        self.clients.claim();
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
      // Claim client to enable caching on first launch
      self.clients.claim();
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
