function b64encode() {
  document.getElementById('output').value = btoa(document.getElementById('input').value);
}
function b64decode() {
  try {
    document.getElementById('output').value = atob(document.getElementById('input').value);
  } catch {
    document.getElementById('output').value = 'Invalid Base64';
  }
}