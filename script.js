// complete the given function

function palindrome(str){
	let s = str.toLowerCase();
    let i =0, j = str.length-1;
	while(i<=j){
		while(i<=j && s[i]===' ') i++;
		while(j>=i && s[j]===' ') j--;
		if(s[i]>='a' && s[i]<='z' && s[j]>='a' && s[j]<='z' && s[i]!==s[j]){
			return false;
		}
		i++;
		j--;
	}
	return true;
}
module.exports = palindrome
