for (i=1; i<101; i++) {  
let multipleofThree = i % 3 ===0; 
let multipleOfFive = i % 5 ===0; 
if(multipleOfFive && multipleofThree) { 
	document.getElementById('display').innerHTML += 'FizzBuzz' + '<br>';
	console.log('FizzBuzz')
}
else if(multipleofThree) {
	document.getElementById('display').innerHTML += 'Fizz' + '<br>';
	console.log('Fizz')
} 
else if(multipleOfFive) {
	document.getElementById('display').innerHTML += 'Buzz' + '<br>';
	console.log('Buzz')
}
else{
	document.getElementById('display').innerHTML += (i) + '<br>'}
}