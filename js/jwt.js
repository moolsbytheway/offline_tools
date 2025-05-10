function decodeJWT() {
    const input = document.getElementById("input").value.trim();
    const parts = input.split('.');

    if (parts.length !== 3) {
        alert("Invalid JWT: Must contain 3 parts separated by dots.");
        return;
    }

    try {
        const [headerB64, payloadB64, signatureB64] = parts;
        const decode = b64 => decodeURIComponent(atob(b64.replace(/-/g, '+').replace(/_/g, '/')).split('').map(c =>
            '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2)).join(''));

        const header = JSON.stringify(JSON.parse(decode(headerB64)), null, 2);
        const payload = JSON.stringify(JSON.parse(decode(payloadB64)), null, 2);
        const signature = signatureB64;

        document.getElementById("header").textContent = "// JWT Header\n" + header;
        document.getElementById("payload").textContent = "// JWT Payload\n" + payload;
        document.getElementById("signature").textContent = "// JWT Signature (base64url encoded)\n" + signature;

    } catch (e) {
        alert("Failed to decode JWT: " + e.message);
    }
}
