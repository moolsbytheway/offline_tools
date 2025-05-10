function convertToDate() {
  try {
    const val = document.getElementById('input').value;
    const date = new Date(parseInt(val) * 1000);
    document.getElementById('output').value = date.toISOString();
  } catch {
    document.getElementById('output').value = 'Invalid timestamp';
  }
}
function convertToTimestamp() {
  try {
    const val = new Date(document.getElementById('input').value).getTime();
    document.getElementById('output').value = Math.floor(val / 1000);
  } catch {
    document.getElementById('output').value = 'Invalid date';
  }
}