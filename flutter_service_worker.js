'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "79eb26158d639583289ac761a50944b0",
".git/config": "929876be487a47f0cb69a4450acc70db",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "56555deed23e4e1286135c5a9a9374f1",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
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
".git/index": "f285f52581c6ad46b5159e6dad6e7792",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7379318567dbf16f97cff0e30859b4b8",
".git/logs/refs/heads/master": "7379318567dbf16f97cff0e30859b4b8",
".git/logs/refs/remotes/origin/master": "989cc5dfe01c9c94dc67361dd98bd37a",
".git/objects/00/1771a611eb827f90d3454e8574bbe3ee1b5f24": "4c781da503e45d67ec38b42199e4733b",
".git/objects/02/c99f9ce39724484ceebbb00266482d8633a88a": "75587b677c156aed667ae836c26f2318",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/05/8dc44de393766ac99f3ebdd6759a131f1c1ced": "a05499175990bfa53260f14b76f8c876",
".git/objects/07/f965a6769f0618c2a166e57b9197d9633e4ae4": "62b1d20e4db36a16a907b7d4b6d8b441",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/15/03408659cb08d67fe17b078f1c7f2df7a163eb": "b6d38d8d325803db16eb4ac2286a3f49",
".git/objects/1a/c7fed18a58963392314028c4140cf1d5677b5c": "863298d7e1301ab81f956fb0ea29798a",
".git/objects/1b/be00559b06a0644d447eba329960dd393c57b3": "18c8f1543397cad701c4ffb65dbc385f",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/686edd1465272558af328ca43cb7189a0059e6": "5e83820f6d3e5392693d45bc239b2b61",
".git/objects/20/d87d117c31184ea7e3abbeb48bbc95a9f4424f": "c1dda5ef7e85559f8651cb33da3bce85",
".git/objects/26/aeafc2762285ad08bb376563fdff76499de20e": "685b77a528f90d974f6771598a64fdc0",
".git/objects/27/2ae9ed6e1a4c8b8a16fb5ab59d9325fc79d613": "4eed0b5849d5f6f57bba42c98f764266",
".git/objects/27/6c03aa6f2dd92e5079f2f7aec17281a8051e8f": "0928fc8d618493455ff95745f055eeb1",
".git/objects/30/a7df90fada5f16064b4c6098cb7d2bae84bd68": "6046da0a951263f530bdb9bc88d437d4",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3b/032b48cad7821841b1f6024a9903666f2aa245": "232e3f4909a531ed6ba340a1e693524e",
".git/objects/3f/9dadefb745e4ec8599d2ea3fb06d4614b8467b": "2f6df450449ef3c6fe94d5f3d76e133b",
".git/objects/45/8fcd8ed3bc9d5fe64faa5ab4c65203b32d9a60": "eea3070699446b0fd5aa8376a79eb87f",
".git/objects/46/e3b4323ced5546396da385980027bf4676e550": "c97440db1b95469dd272588c1d32d665",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/51/f4ae5404fc79be09e69171bfc9d34d48810297": "cbccb909471e4568310a97f46dd1e258",
".git/objects/5b/2c242d3c7ff508d01b704bce1bcda55197c3eb": "98da71ddc80ffbcdc1b58e8732341f74",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/ccdd4f1df84de2232dc528f0da5dee7eac96c1": "a2249e88d382736ef0910508d91bea3c",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/75/7b060ff5f9ea7b84eb2bc2c9fa8c4ec729f552": "abef69bc68fc9e230645ed1364421554",
".git/objects/77/b05912c135a28bb6248b4bc63547f9dedc94d6": "ff339c28d191a8193f3ce56204241b25",
".git/objects/81/cbda56927a0e42da57ea31eea67526aab4ec77": "8efcd3132e13c7f9237cb35cec1d59e9",
".git/objects/83/c0ed51307f52f0f29348357b25a90ad16fea7e": "ff3764bd9af6bd5da6b9b44be2475a66",
".git/objects/8d/dc6cd70071027a3306de5ac38c0c4145b57979": "06845516b6ea1d4abdf216d2308519b7",
".git/objects/a0/dbb3c52de45974a99d87a3e16c35d270bf0f7c": "4575ee7f08a56387d00809aec8c4fc73",
".git/objects/a1/8b26f4f2030188a2a553ae251380d9161db396": "c6f86ad4087da5e7d43ffb1121bd6236",
".git/objects/a6/d54cc8d8897463cfd65d24b95129222a34fbce": "089e279bc984cbfad2b2e54e1009ae18",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b6/3111092a18620ea9dcacf993a0cae0138344c1": "2998442f22de433559ad13cf75d125c0",
".git/objects/bb/374e2e5dcbd18804952ee7405c917ebb975794": "5c11cffd4a8447b090132a9ef72b0eb2",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/c5/d8a20ed2976817e5e9ace115b823228fb9deb1": "4399abdce4f3f62359974735abc29183",
".git/objects/cc/88c4ea70e8cd4efedf8b7cad94c081c40cfef3": "39c47bdfa9d005f53dd15bfa9bd371ea",
".git/objects/ce/42f4d2df2af073e3f407f1578e480ce4b4639e": "229a4af743918f563574b6b1dd11cc3e",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/e6/5c55a5b595e20e25bd59a1c8bd161d5b13e8a3": "a790fab1222de456f3faf3ebd3e8b99d",
".git/objects/fe/8c7dd4baa6c9d5230b1d555cdffd4ea23eb48e": "f655eb7e180621a400f6ecd514931a51",
".git/objects/ff/537f1a1d1d4a185485fe8dd305b7f11469c021": "eddbc435a9c2989b288fc2d2b950d584",
".git/objects/pack/pack-382a228c07355535cfa676220fedec4c04ff22a9.idx": "e137ce1ab3e364191fc942f1c8be6ad9",
".git/objects/pack/pack-382a228c07355535cfa676220fedec4c04ff22a9.pack": "a23227b07e55cad5edc06fcc87b15233",
".git/refs/heads/master": "1695b9308460c591e191743a191b9a94",
".git/refs/remotes/origin/master": "1695b9308460c591e191743a191b9a94",
"assets/AssetManifest.json": "b2eb4964317489c5f92e56a951e95add",
"assets/AssetManifest.smcbin": "817d79e0185e2b17edaba630d3e557c9",
"assets/assets/images/background.png": "d234b72fea191687d8e9869ff284167f",
"assets/assets/images/background_1.png": "172e7bbf2879d9e0b9a1ba3ae0ac0080",
"assets/assets/images/contact.png": "29f37b7d149651cb20fd440e4c864e91",
"assets/assets/images/favicon_1.ico": "549057b13411d3b274c4555422edf2e7",
"assets/assets/images/home.png": "ff6b822a53f70b1fcbfa24a9ab475801",
"assets/assets/images/icons/android.png": "03c3b501544b15cc848f7f57c3b0b3c9",
"assets/assets/images/icons/css.png": "c26a73b45b9a801864f13edeb0aa2cfb",
"assets/assets/images/icons/firebase.png": "3602dbeac7b595e78e75ceda8f0e9002",
"assets/assets/images/icons/flutter.png": "8a50b602aa79b19775c22d02a290f51f",
"assets/assets/images/icons/gcloud.png": "a8563941db1a2136b13ce2e6cdf9f011",
"assets/assets/images/icons/git.png": "728ff5a8e44d74cd0f2359ef0a9ec88a",
"assets/assets/images/icons/html.png": "e5a42430931633d5f559fb3fdaf28ec9",
"assets/assets/images/icons/java.png": "74e943d82452f81f6a0bb0b51ac6785d",
"assets/assets/images/icons/kotlin.png": "4d3d5f5ef6fb18b3ecf85932dccc7071",
"assets/assets/images/icons/ktor.png": "4200101d24c0277f007fda80fcb94e0a",
"assets/assets/images/icons/mysql.png": "53c430223237eabb90d14efe63f76c85",
"assets/assets/images/icons/postman.png": "3ea38d2f537dfb48a759ad0e0682ff37",
"assets/assets/images/mini_background.png": "70821c2fa63d6bfb1ddd22c9521d28bb",
"assets/assets/images/mini_background_1.png": "5a389f4ddf588cba88a245dbcbfbecbe",
"assets/assets/images/plant.png": "667b2eb4f718855245b43a7c0563c837",
"assets/assets/images/poojan.jpg": "8627e44f75628c1d9ffb1dd85debe3cd",
"assets/assets/images/workspace.png": "245ed484737d35ac1143a1f8f2b045c4",
"assets/assets/lottie/dark.json": "86dd078a857f028d9aa3a46541e059b8",
"assets/assets/lottie/light.json": "c2603af4cadb6551cdb44c1830e84caa",
"assets/assets/project_data/project_data.json": "333ebb166dd123787074c24f7de4d2eb",
"assets/assets/project_data/self_data.json": "1a6e127f92a9d90d5fbf65fef8e75486",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "62ec8220af1fb03e1c20cfa38781e17e",
"assets/NOTICES": "c1add660829d126ad5f023773847e690",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6bf31413520033946843f488ebfe4f02",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "0db203e8632f03baae0184700f3bda48",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "01bb14ae3f14c73ee03eed84f480ded9",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "efc6c90b58d765987f922c95c2031dd2",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "76f7d822f42397160c5dfc69cbc9b2de",
"canvaskit/canvaskit.wasm": "f48eaf57cada79163ec6dec7929486ea",
"canvaskit/chromium/canvaskit.js": "8c8392ce4a4364cbb240aa09b5652e05",
"canvaskit/chromium/canvaskit.wasm": "fc18c3010856029414b70cae1afc5cd9",
"canvaskit/skwasm.js": "1df4d741f441fa1a4d10530ced463ef8",
"canvaskit/skwasm.wasm": "6711032e17bf49924b2b001cef0d3ea3",
"canvaskit/skwasm.worker.js": "19659053a277272607529ef87acf9d8a",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"favicon_1.ico": "549057b13411d3b274c4555422edf2e7",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "849b7152cd2fa3e56c1c5875c6496c71",
"/": "849b7152cd2fa3e56c1c5875c6496c71",
"main.dart.js": "509f0ba6e5f8679477acb8932a1292d3",
"manifest.json": "5a2c0526f1fe73e6f211bc7a9d15c210",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
