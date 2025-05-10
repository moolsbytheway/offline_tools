function generateQRCode() {
  const text = document.getElementById('input').value;
  const width = parseInt(document.getElementById('width').value) || 300;
  const height = parseInt(document.getElementById('height').value) || 300;
  const canvas = document.getElementById('output');
  QRCode.toCanvas(canvas, text, { width, height }, function (error) {
    if (error) console.error(error);
  });
}
