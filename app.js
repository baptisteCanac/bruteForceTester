const letters = "abcdefghijklmnopqrstuvwxyz";

/* randomize the master password */
const masterPswFirstLetter = letters[Math.floor(Math.random() * letters.length)]
const masterPswSecondLetter = letters[Math.floor(Math.random() * letters.length)]
const masterPswThirdLetter = letters[Math.floor(Math.random() * letters.length)]
const masterPswFourthLetter = letters[Math.floor(Math.random() * letters.length)]
const masterPswFifthLetter = letters[Math.floor(Math.random() * letters.length)]

let masterPassword = masterPswFirstLetter + masterPswSecondLetter + masterPswThirdLetter + masterPswFourthLetter + masterPswFifthLetter

function enterButton(){
	console.log("good password : " + masterPassword)
	let passwordEnter = document.getElementById("psw").value;
	if (passwordEnter == masterPassword){
		window.open("https://google.com")
	}
	else{
		console.log("wrong password")
		document.getElementById("wrongPassword").innerHTML = "wrong password";
	}
}
