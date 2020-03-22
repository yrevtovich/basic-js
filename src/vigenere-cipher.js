class VigenereCipheringMachine {
    constructor(mod = true) {
        this.modification = mod;
        this.whiteSpaces = [];
        this.encryptResult = '';
    }
    encrypt(message, key) {
        if( !message || !key) {
            throw new Error();
        }

        let result = '';

        let transformedMessage = this.transformParams(message, true, false);
        let transformedKey = this.transformParams(key, false, message.length);

        for (let i = 0; i < transformedMessage.length; i++) {
            if (transformedMessage[i].charCodeAt() > 64 && transformedMessage[i].charCodeAt() < 91) { 
                let newCharCode = transformedMessage[i].charCodeAt() + transformedKey[i].charCodeAt() -65;
                if ( newCharCode > 90) {
                    newCharCode -= 26;
                }
                result += String.fromCharCode(newCharCode);
            } else {
                result += transformedMessage[i]
            }
        }
        
        if (this.whiteSpaces.length > 0) {
            result = result.split('');
            this.whiteSpaces.forEach( item => {
                result.splice(item, 0, ' ');
            });
            this.whiteSpaces = [];
            result = result.join('');
        }

        if (!this.modification) {
            result.split('').reverse().join('');
        }
        
        return result;
    }

    decrypt(encryptedMessage, key) {
        if( !encryptedMessage || !key) {
            throw new Error();
        }

        let result = '';

        let transformedMessage = this.transformParams(encryptedMessage, true, false);
        let transformedKey = this.transformParams(key, false, encryptedMessage.length);
        
        if (!this.modification) {
            transformedKey.reverse();
        }

        for (let i = 0; i < transformedMessage.length; i++) {
            if (transformedMessage[i].charCodeAt() > 64 && transformedMessage[i].charCodeAt() < 91) { 
                let newCharCode = transformedMessage[i].charCodeAt() - transformedKey[i].charCodeAt() + 65;
                if (newCharCode < 65) {
                    newCharCode += 26;
                }
                result += String.fromCharCode(newCharCode);
            } else {
                result += transformedMessage[i]
            }
        }
        
        if (this.whiteSpaces.length > 0) {
            result = result.split('');

            this.whiteSpaces.forEach( item => {
                result.splice(item, 0, ' ');
            });

            this.whiteSpaces = [];
            result = result.join('');
        }
        
        return result;
    }

    transformParams(param, spaces, keyLength) {
        let paramArr = param.toUpperCase().split(' ');
        let counter = 0;

        if (spaces) {
            for (let i = 0; i < (paramArr.length - 1); i++) {
                counter += paramArr[i].length;
                if ( i === 0) {
                    this.whiteSpaces.push(paramArr[i].length);
                } else {  
                    counter++;                  
                    this.whiteSpaces.push(counter);
                }                
            }
        }
        
        paramArr = paramArr.join('').split('');
        let newParamArr = [];

        if (keyLength) {
            if (param.length < keyLength) {
                for (let i = 0; i < Math.floor(keyLength / param.length); i++) {
                    paramArr.forEach( item => {
                        newParamArr.push(item);
                    })
                }

                if (keyLength % param.length !== 0) {
                    for (let i = 0; i < (keyLength % param.length); i++) {
                        newParamArr.push(paramArr[i]);
                    }
                }
                paramArr = newParamArr;
            }            
        }

        return paramArr;       
    }
}

module.exports = VigenereCipheringMachine;
