function updateColor() {
  const val = document.getElementById('colorInput').value;
  document.getElementById('output').innerText = 'HEX: ' + val.toUpperCase();
}