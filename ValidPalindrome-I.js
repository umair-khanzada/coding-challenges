/**
 * @param {string} s
 * @return {boolean}
 */
/*
* URL: https://leetcode.com/problems/valid-palindrome/description/
*
*/

const isPalindrome = function(s) {
    if(s === ' ') return true;

    let code, char, i = 0, j = 0, processedString = '';
    for(i; i < s.length; i++) {
        char = s[i];
        code = char.charCodeAt(0);
        // Check if char b/w capital A-Z using ASCII value if not,
        // then check for small a-z and 0-9 using same ASCII code.
        if (code >= 65 && code <= 90) processedString += char.toLowerCase();
        else if ((code >= 97 && code <= 122) || (code >= 48 && code <= 57)) processedString += char;
    }

    // Divide from the mid point and compare.
    const len = processedString.length - 1;
    for(j; j < Math.floor(processedString.length / 2); j++) {
        if(processedString[j] !== processedString[len - j]) return false;
    }
    return true;
};
