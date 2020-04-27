// Function to convert each letter to its encrypted letter
// NOTE: + 1 is required because we are taking 90 as limit. So for Letter C: code= 67, encrpytedcode= 64 so the difference between 65 and 64 is 1 but we want 122 as code and not 122 - 1 
function encriptLetter(letter, offset) {
  let code = letter.charCodeAt(0), encryptedCode = code - offset;
  //For Captalized Letters
  if (encryptedCode < 65) {
    encryptedCode = 90 - (65 - (code - 3)) + 1;
  }//For small case letters
  else if (encryptedCode > 90 && encryptedCode < 97) {
    encryptedCode = 122 - (97 - (code - 3)) + 1;
  }

  return String.fromCharCode(encryptedCode);
}
//Function to convert the whole string into encrypted string
function CaesarEncrypt(message, offset) {
  let encryptedMessage = '';

  // encryptedMessage += message.split('').map(e => e == ' ' ? e : encriptLetter(e, offset)).join('')

  for (let i of message) {
    encryptedMessage += i == ' ' ? i : encriptLetter(i, offset);
  }

  return encryptedMessage;
}

console.log(CaesarEncrypt('This is a secret message from nikita malpani', 3))
