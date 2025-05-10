document.getElementById('hashForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const input = document.getElementById('input').value;
    const saltRounds = 10;

    try {
        const hashedString = await dcodeIO.bcrypt.hash(input, saltRounds);
        document.getElementById('hashedOutput').innerText = hashedString;
    } catch (error) {
        document.getElementById('hashedOutput').innerText = "Error hashing string";
        console.error("Bcrypt error:", error);
    }
});

document.getElementById('verifyForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const originalString = document.getElementById('verifyString').value;
    const hashedString = document.getElementById('hashedString').value;

    try {
        const match = await dcodeIO.bcrypt.compare(originalString, hashedString);
        document.getElementById('verifyOutput').innerText = match ? "Match!" : "Does not match!";
        document.getElementById('verifyOutput').style.color = match ? "green" : "red"
    } catch (error) {
        document.getElementById('verifyOutput').innerText = "Error verifying string";
        console.error("Bcrypt verify error:", error);
    }
});
document.getElementById('copyButton').addEventListener('click', function () {
    const hashedText = document.getElementById('hashedOutput').innerText;
    if (hashedText) {
        navigator.clipboard.writeText(hashedText).then(() => {
            alert("Copied to clipboard!");
        }).catch(err => {
            console.error("Error copying text: ", err);
        });
    }
});
