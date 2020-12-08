function appendScript(URL) {
  var el = document.createElement('script');
  el.src = URL;
  // document.body.appendChild(el);
  document.getElementsByTagName('head')[0].appendChild(el);
};

$(function(){
  appendScript('public/components/header.js');
  appendScript('public/components/footer.js');
  appendScript('public/components/nav.js');
});
