// complete the given function

function palindrome(str){
	let string=str.toLowerCase();
let len=string.length-1;
	for(let i=0;i<len/2;i++){
		if(string[i]!==string[len-i]){
			return false;
		}
	}
	return true;
}
module.exports = palindrome
