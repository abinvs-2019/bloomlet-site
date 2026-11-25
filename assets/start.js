// "Get started" goes where this phone can start fastest: Google Play on
// Android, the web app everywhere else (iPhone, iPad, computers). The link's
// own href is the web app, so it still works if this script never runs.
(function () {
  var PLAY = 'https://play.google.com/store/apps/details?id=com.superbits.superspace.app';
  var ua = navigator.userAgent || '';
  var android = /Android/i.test(ua) ||
    (navigator.userAgentData && /Android/i.test(navigator.userAgentData.platform || ''));
  if (!android) return;
  var links = document.querySelectorAll('a[data-start]');
  for (var i = 0; i < links.length; i++) links[i].href = PLAY;
})();
