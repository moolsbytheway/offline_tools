function toUpperCase() {
  document.getElementById('output').value = document.getElementById('input').value.toUpperCase();
}
function toLowerCase() {
  document.getElementById('output').value = document.getElementById('input').value.toLowerCase();
}
function toTitleCase() {
  const input = document.getElementById('input').value;
  document.getElementById('output').value = input.toLowerCase().replace(/\b\w/g, c => c.toUpperCase());
}