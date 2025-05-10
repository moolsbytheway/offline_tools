function testRegex() {
  const pattern = document.getElementById('pattern').value;
  const input = document.getElementById('input').value;
  try {
    const regex = new RegExp(pattern, 'g');
    const matches = input.match(regex);
    document.getElementById('output').innerText = matches ? 'Matches: ' + matches.join(', ') : 'No match';
  } catch (e) {
    document.getElementById('output').innerText = 'Invalid regex';
  }
}