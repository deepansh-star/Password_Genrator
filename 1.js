document.getElementById('generate').addEventListener('click', generatePassword);
document.getElementById('copy').addEventListener('click', copyPassword);

function generatePassword() {
    const length = document.getElementById('length').value;
    const uppercase = document.getElementById('uppercase').checked;
    const lowercase = document.getElementById('lowercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;

    const charset = [];
    if (uppercase) charset.push('ABCDEFGHIJKLMNOPQRSTUVWXYZ');
    if (lowercase) charset.push('abcdefghijklmnopqrstuvwxyz');
    if (numbers) charset.push('0123456789');
    if (symbols) charset.push('!@#$%^&*()_+~`|}{[]:;?><,./-=');

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomCharset = charset[Math.floor(Math.random() * charset.length)];
        const randomChar = randomCharset[Math.floor(Math.random() * randomCharset.length)];
        password += randomChar;
    }

    document.getElementById('password').textContent = password;
    document.getElementById('copy').disabled = false;
}

function copyPassword() {
    const password = document.getElementById('password').textContent;
    const textarea = document.createElement('textarea');
    textarea.value = password;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
    alert('Password copied to clipboard!');
}
