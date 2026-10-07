// complete the given function

function palindrome(str){
	let s = "";
	for(let i=0; i<str.length;i++ ){
		if(str[i]===' ') continue;
		s+=str[i];
	}
	let i=0, j=s.length-1;
	while(i<=j){
		if(s[i]!=s[j]) return false;
		i++;
		j--;
	}
	return true;
}
module.exports = palindrome
