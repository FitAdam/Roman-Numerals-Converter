/*
Example: convertRomanIntoArabic('CDLXXXIII') should return 483.
*/

function convertRomanIntoArabic(str) {
    let splitString = str.split("");
    let arabicNum = 0;
    for (let i = 0; i < splitString.length; i++) {
        if (splitString[i] === 'I') {
            if (splitString[i] + splitString[i + 1] === 'IV') {
                arabicNum += 4;
                i++;
            } else if (splitString[i] + splitString[i + 1] === 'IX') {
                arabicNum += 9;
                i++;
            } else {
                
                arabicNum++;
            }

        }
        else if (splitString[i] === 'V') {
            arabicNum += 5;
        }
        else if (splitString[i] === 'X') {
            if (splitString[i] + splitString[i + 1] === 'XL') {
                arabicNum += 40;
                i++;
            } else if (splitString[i] + splitString[i + 1] === 'XC') {
                arabicNum += 90;
                i++;
            } else {

                arabicNum += 10;

            }

        }
        else if (splitString[i] === 'L') {
            arabicNum += 50;
        }
        else if (splitString[i] === 'C') {
            if (splitString[i] + splitString[i + 1] === 'CD') {
                arabicNum += 400;
                i++;
            } else if (splitString[i] + splitString[i + 1] === 'CM') {
                arabicNum += 900;
                i++;
            } else {

                arabicNum += 100;

            }

        }
        else if (splitString[i] === 'D') {
            arabicNum += 500;
        }
        else if (splitString[i] === 'M') {
            arabicNum += 1000;
        }

    }
    return arabicNum
}

console.log(convertRomanIntoArabic('XC'))


/*
Example: convertArabicIntoRoman(483) should return 'CDLXXXIII'.
*/


function convertArabicIntoRoman(num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

console.log(convertArabicIntoRoman(1900))