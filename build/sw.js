importScripts(
    'https://storage.googleapis.com/workbox-cdn/releases/3.0.0/workbox-sw.js'
);

workbox.routing.registerRoute(
    new RegExp('https://jsonplaceholder.typicode.com/users'),
    workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
        cacheName: 'google-fonts',
        plugins: [
            new workbox.expiration.Plugin({
                maxEntries: 30,
            }),
            new workbox.cacheableResponse.Plugin({
                statuses: [0, 200],
            }),
        ],
    })
);

workbox.precaching.precacheAndRoute([{
        url: 'css/main.css',
        revision: 'd3072ab3693c185313018e404e07d914',
    },
    {
        url: 'index.html',
        revision: 'a40871df1e3a91dd14b9e21363d4cc71',
    },
    {
        url: 'js/app.js',
        revision: '6b73f45a2506a26e00e425688eaa6514',
    },
]);

if (!self.define) {
    let e,
        s = {};
    const i = (i, r) => (
        (i = new URL(i + '.js', r).href),
        s[i] ||
        new Promise((s) => {
            if ('document' in self) {
                const e = document.createElement('script');
                (e.src = i), (e.onload = s), document.head.appendChild(e);
            } else(e = i), importScripts(i), s();
        }).then(() => {
            let e = s[i];
            if (!e) throw new Error(`Module ${i} didn’t register its module`);
            return e;
        })
    );
    self.define = (r, t) => {
        const n =
            e ||
            ('document' in self ? document.currentScript.src : '') ||
            location.href;
        if (s[n]) return;
        let o = {};
        const c = (e) => i(e, n),
            d = { module: { uri: n }, exports: o, require: c };
        s[n] = Promise.all(r.map((e) => d[e] || c(e))).then((e) => (t(...e), o));
    };
}
define(['./workbox-41d5e2b3'], function(e) {
    'use strict';
    self.addEventListener('message', (e) => {
            e.data && 'SKIP_WAITING' === e.data.type && self.skipWaiting();
        }),
        e.precacheAndRoute(
            [
                { url: 'css/main.css', revision: '78e4260d84657ebaddb8cc9ef24dce96' },
                { url: 'index.html', revision: '037f502189f8dd124393aef33dc0ffcb' },
                { url: 'js/app.js', revision: 'f071999373bea66d7a95281ce0250370' },
            ], {}
        );
});
//# sourceMappingURL=sw.js.map