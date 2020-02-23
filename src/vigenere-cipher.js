class VigenereCipheringMachine {

    constructor(reverse = true) {
        this.reverse = reverse;
        this.tabulaRecta = {
            "a": "abcdefghijklmnopqrstuvwxyz",
            "b": "bcdefghijklmnopqrstuvwxyza",
            "c": "cdefghijklmnopqrstuvwxyzab",
            "d": "defghijklmnopqrstuvwxyzabc",
            "e": "efghijklmnopqrstuvwxyzabcd",
            "f": "fghijklmnopqrstuvwxyzabcde",
            "g": "ghijklmnopqrstuvwxyzabcdef",
            "h": "hijklmnopqrstuvwxyzabcdefg",
            "i": "ijklmnopqrstuvwxyzabcdefgh",
            "j": "jklmnopqrstuvwxyzabcdefghi",
            "k": "klmnopqrstuvwxyzabcdefghij",
            "l": "lmnopqrstuvwxyzabcdefghijk",
            "m": "mnopqrstuvwxyzabcdefghijkl",
            "n": "nopqrstuvwxyzabcdefghijklm",
            "o": "opqrstuvwxyzabcdefghijklmn",
            "p": "pqrstuvwxyzabcdefghijklmno",
            "q": "qrstuvwxyzabcdefghijklmnop",
            "r": "rstuvwxyzabcdefghijklmnopq",
            "s": "stuvwxyzabcdefghijklmnopqr",
            "t": "tuvwxyzabcdefghijklmnopqrs",
            "u": "uvwxyzabcdefghijklmnopqrst",
            "v": "vwxyzabcdefghijklmnopqrstu",
            "w": "wxyzabcdefghijklmnopqrstuv",
            "x": "xyzabcdefghijklmnopqrstuvw",
            "y": "yzabcdefghijklmnopqrstuvwx",
            "z": "zabcdefghijklmnopqrstuvwxy"
        }
    }
    
    encrypt(plainText, keyword) {
        if( typeof(plainText) !== "string" ){
            throw "invalid plainText. Must be string, not " + typeof(plainText);
        }
        if( typeof(keyword) !== "string" ){
            throw "invalid keyword. Must be string, not " + typeof(keyword);
        }
    
        plainText = plainText.toLowerCase();
        keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
        let encryptedText = "";
        let specialCharacterCount = 0;
    
        for( let i = 0; i < plainText.length; i++ ){
            const keyLetter = (i - specialCharacterCount) % keyword.length;
            const keywordIndex = this.tabulaRecta.a.indexOf(keyword[keyLetter]);
    
            if( this.tabulaRecta[plainText[i]] ){
                encryptedText += this.tabulaRecta[plainText[i]][keywordIndex];
            }else{
                encryptedText += plainText[i];
                specialCharacterCount++;
            }
        }
        
        encryptedText = encryptedText.toUpperCase()

        return this.reverse ? encryptedText : encryptedText.split('').reverse().join('');
    }

    decrypt(encryptedText, keyword) {
        if( typeof(encryptedText) !== "string" ){
            throw "invalid encryptedText. Must be string, not " + typeof(encryptedText);
        }
        if( typeof(keyword) !== "string" ){
            throw "invalid keyword. Must be string, not " + typeof(keyword);
        }
      
        encryptedText = encryptedText.toLowerCase();
        keyword = keyword.match(/[a-z]/gi).join("").toLowerCase();
        let decryptedText = "";
        let specialCharacterCount = 0;
      
        for( let i = 0; i < encryptedText.length; i++ ){
            const keyLetter = (i - specialCharacterCount) % keyword.length;
            const keyRow = this.tabulaRecta[keyword[keyLetter]];
    
            if( keyRow.indexOf(encryptedText[i]) !== -1 ){
                decryptedText += this.tabulaRecta.a[keyRow.indexOf(encryptedText[i])];
            }else{
                decryptedText += encryptedText[i];
                specialCharacterCount++;
            }
        }
      
        decryptedText = decryptedText.toUpperCase()

        return this.reverse ? decryptedText : decryptedText.split('').reverse().join('');
    }
}

module.exports = VigenereCipheringMachine;
