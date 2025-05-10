function gzipCompress() {
  const input = document.getElementById('input').value;
  const compressed = pako.gzip(input);
  const base64 = btoa(String.fromCharCode(...compressed));
  document.getElementById('output').value = base64;
}
function gzipDecompress() {
  try {
    const input = atob(document.getElementById('input').value);
    const bytes = new Uint8Array([...input].map(c => c.charCodeAt(0)));
    const decompressed = pako.ungzip(bytes, { to: 'string' });
    document.getElementById('output').value = decompressed;
  } catch (e) {
    document.getElementById('output').value = 'Invalid compressed data';
  }
}