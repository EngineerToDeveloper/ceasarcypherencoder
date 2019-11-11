(function(){
    let aplhabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    let encryptedMsgArr = [];

    function encryptWord() {
        let msg = document.getElementById('msg').value;
        let msgArray = msg.split(' ');
        let encryptKey = document.getElementById('encrypt-key').value;
       msgArray.forEach(word => {
            let i;
            let array = [];
            for (i = 0; i < word.length; i++) {
                var encryptedLetter;
                let letter = word.charAt(i);
                let aplhabetNum = aplhabet.indexOf(letter);
                let e = aplhabetNum + parseInt(encryptKey);
                if ( e > 25) {
                    e = encryptKey - (aplhabet.length - aplhabetNum);
                    encryptedLetter = aplhabet[e];
                } else {
                    encryptedLetter = aplhabet[e];
                }
                array.push(encryptedLetter);
            }
             let newWord = array.join('');
             encryptedMsgArr.push(newWord);
        });

        let encryptedMsg = encryptedMsgArr.join(' ');
    
        alert(`The encrypted message is "${encryptedMsg}" and the decryption key is ${encryptKey}.`)
    }

    document.querySelector('button').addEventListener('click', encryptWord);
})()