function countWordsChars() {
  const text = document.getElementById('input').value.trim();
  const wordCount = text.length > 0 ? text.split(/\s+/).length : 0;
  const charCount = text.length;
  document.getElementById('output').innerText = 'Words: ' + wordCount + ', Characters: ' + charCount;
}