/**
 * @param {string} s
 * @return {boolean}
 */
/*
* URL: https://leetcode.com/problems/valid-palindrome-ii/description/
*
*/


function validPalindrome(s) {
    function isPalindromeRange(i, j) {
        while (i < j) {
            if (s[i] !== s[j]) return false;
            i++;
            j--;
        }
        return true;
    }

    let i = 0, j = s.length - 1;
    while (i < j) {
        if (s[i] !== s[j]) {
            return isPalindromeRange(i + 1, j) || isPalindromeRange(i, j - 1);
        }
        i++;
        j--;
    }
    return true;
}

/*
* This is my own implementation, without seeing any solution.
* The issue in this approach is substring, It makes it expensive.
* */
const validPalindromeII = function(s) {
    let isPalindrome = false, len;
    for (let i = -1; i < s.length; i++) {
        isPalindrome = true;
        //Check full string in first iteration.
        let str = i === -1 ? s : s.substring(0, i) + s.substring(i + 1);
        // Do not need to compare middle element, if length is in odd number.
        let midPoint = Math.floor(str.length / 2);
        len = str.length - 1;
        for(let j = 0; j < midPoint; j++) {
            if(str[j] !== str[len - j]) {
                isPalindrome = false;
                break;
            }
        }
        if(isPalindrome) return isPalindrome;
    }
    return isPalindrome;
};
