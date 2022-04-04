/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
    s = s.toLowerCase();
    s = s.replace(/[^A-Z0-9]/gi, '');
    
    let i = 0
    let j = s.length - 1;
    
    while (i < j) {
        if (s[i] !== s[j]) return false;
        
        i++;
        j--
    }
    return true;
};

/**
 * My solution: saves time by not replacing non-alphanumeric characters.
 * Runtime: 64 ms, faster than 98.60%
 * Space: 43.5 MB, ess than 98.32%
 */
 var isPalindrome = function(s) {
	s = s.toLowerCase();
    let start = 0;
	let end = s.length -1;
    const regex = /[a-z0-9]/;

    while (start < end) {
        if (!regex.test(s[start])) start++;
        else if (!regex.test(s[end])) end--;
        else if (s[start] !== s[end]) return false;
        else {
            start++;
            end--;
        }
    }
	return true;
}