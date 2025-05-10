function formatJSON() {
  try {
    const json = JSON.parse(document.getElementById('input').value);
    document.getElementById('output').value = JSON.stringify(json, null, 2);
  } catch {
    document.getElementById('output').value = 'Invalid JSON';
  }
}
function minifyJSON() {
  try {
    const json = JSON.parse(document.getElementById('input').value);
    document.getElementById('output').value = JSON.stringify(json);
  } catch {
    document.getElementById('output').value = 'Invalid JSON';
  }
}