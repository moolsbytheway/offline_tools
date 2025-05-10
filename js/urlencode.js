function urlEncode() {
  document.getElementById('output').value = encodeURIComponent(document.getElementById('input').value);
}
function urlDecode() {
  document.getElementById('output').value = decodeURIComponent(document.getElementById('input').value);
}