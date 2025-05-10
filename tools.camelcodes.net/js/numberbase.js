function convertBase() {
  const input = document.getElementById('input').value;
  const fromBase = parseInt(document.getElementById('fromBase').value);
  const toBase = parseInt(document.getElementById('toBase').value);
  try {
    const converted = parseInt(input, fromBase).toString(toBase).toUpperCase();
    document.getElementById('output').innerText = 'Result: ' + converted;
  } catch {
    document.getElementById('output').innerText = 'Invalid number or base';
  }
}