function decodeJWT() {
  try {
    const input = document.getElementById('input').value.split('.')[1];
    const decoded = atob(input);
    document.getElementById('output').value = JSON.stringify(JSON.parse(decoded), null, 2);
  } catch {
    document.getElementById('output').value = 'Invalid JWT';
  }
}