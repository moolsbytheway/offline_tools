function renderHTML() {
  const html = document.getElementById('input').value;
  const iframe = document.getElementById('output');
  iframe.srcdoc = html;
}