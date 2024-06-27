const passwordBox=document.getElementById("password-box");
const genaratePassword=document.getElementById("password-btn");

const length=14;
const upperCase="QWERTYUIOPASDFGHJKLZXCVBNM";
const lowerCase="qwertyuiopasdfghjklzxcvbnm";
const number="1234567890";
const symbol="!@#$%^&* ()_+{}:><<>?"
const allChars=upperCase + lowerCase + symbol + number;

genaratePassword.addEventListener("click", ()=>{
    let password="";
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += symbol[Math.floor(Math.random() * symbol.length)];
    password += number[Math.floor(Math.random() * number.length)];
while(length > password.length){
    password += allChars[Math.floor(Math.random() * allChars.length)];
}
passwordBox.value=password;
});


