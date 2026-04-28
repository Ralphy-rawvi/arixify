/**
 * head-common.js — Arixify 全站共用 <head> 元素
 * 
 * 涵蓋：theme-color、GA、Google Fonts、Favicon、共用 OG / Twitter Card
 * 不涵蓋（各頁自行維護）：title、meta description、canonical、
 *   og:url、og:title、og:description、twitter:title、twitter:description
 * 
 * 用法：在每頁 <head> 裡加一行：
 *   <script src="/head-common.js"></script>
 * 
 * 放在 <title> 之後、各頁專屬 meta tags 之前或之後都行。
 * 
 * 最後更新：2026-04-12
 */

(function () {
  var head = document.head;

  // ── theme-color ──
  _meta('name', 'theme-color', '#7C6EFA');

  // ── Google Analytics (gtag.js) ──
  var GA_ID = 'G-PC84CNS25L';
  var gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  head.appendChild(gaScript);

  var gaInit = document.createElement('script');
  gaInit.textContent =
    'window.dataLayer=window.dataLayer||[];' +
    'function gtag(){dataLayer.push(arguments);}' +
    'gtag("js",new Date());' +
    'gtag("config","' + GA_ID + '");';
  head.appendChild(gaInit);

  // ── Google Fonts ──
  _link({ rel: 'preconnect', href: 'https://fonts.googleapis.com' });
  _link({ rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' });
  _link({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,400;0,9..40,500;0,9..40,600;0,9..40,700;1,9..40,400&family=JetBrains+Mono:wght@400;500&family=Sora:wght@400;500;600;700;800&display=swap'
  });

  // ── Favicons ──
  _link({ rel: 'icon', type: 'image/svg+xml', href: '/icon.svg' });
  _link({ rel: 'icon', href: '/favicon.ico', sizes: 'any' });
  _link({ rel: 'icon', type: 'image/png', sizes: '16x16',  href: '/favicon-16x16.png' });
  _link({ rel: 'icon', type: 'image/png', sizes: '32x32',  href: '/favicon-32x32.png' });
  _link({ rel: 'icon', type: 'image/png', sizes: '48x48',  href: '/favicon-48x48.png' });
  _link({ rel: 'icon', type: 'image/png', sizes: '96x96',  href: '/favicon-96x96.png' });
  _link({ rel: 'icon', type: 'image/png', sizes: '144x144', href: '/favicon-144x144.png' });
  _link({ rel: 'icon', type: 'image/png', sizes: '192x192', href: '/favicon-192x192.png' });
  _link({ rel: 'apple-touch-icon', href: '/apple-touch-icon.png' });

  // ── Open Graph (shared across all pages) ──
  _meta('property', 'og:type', 'website');
  _meta('property', 'og:site_name', 'Arixify');
  _meta('property', 'og:image', 'https://arixify.com/og-image.png');
  _meta('property', 'og:image:width', '1200');
  _meta('property', 'og:image:height', '630');
  _meta('property', 'og:locale', 'en_US');

  // ── Twitter Card (shared across all pages) ──
  _meta('name', 'twitter:card', 'summary_large_image');
  _meta('name', 'twitter:image', 'https://arixify.com/og-image.png');

  // ── helpers ──
  function _link(attrs) {
    var el = document.createElement('link');
    for (var k in attrs) el.setAttribute(k, attrs[k]);
    head.appendChild(el);
  }

  function _meta(attr, name, content) {
    var el = document.createElement('meta');
    el.setAttribute(attr, name);
    el.content = content;
    head.appendChild(el);
  }
})();
