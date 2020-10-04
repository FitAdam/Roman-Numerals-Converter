const intoArabicBtn = document.querySelector(".convertBtn");
intoArabicBtn.addEventListener('click',convertNumber);

const resetButton = document.querySelector(".resetBtn");
resetButton.addEventListener('click',resetRomanField);

const intoRomanBtn = document.querySelector(".convertBtn_1");
intoRomanBtn.addEventListener('click',convertNumberReverse);

const resetButton_1 = document.querySelector(".resetBtn_1");
resetButton_1.addEventListener('click',resetArabicField);


function convertNumber (){
    
    let input = document.getElementById("romanfm").value;
    let convertedValue = convertRomanIntoArabic(input);
    document.querySelector(".number").innerHTML = convertedValue;
}

function resetRomanField() {
    document.getElementById("romanfm").value = "";
}


function convertNumberReverse (){
    
    let input = document.getElementById("arabicfm").value;
    let convertedValue = convertArabicIntoRoman(input);
    document.querySelector(".number_1").innerHTML = convertedValue;
}

function resetArabicField() {
    document.getElementById("arabicfm").value = "";
}

/*
Example: convertRomanIntoArabic('CDLXXXIII') should return 483.
*/

function convertRomanIntoArabic(str) {
    str = str.toUpperCase();
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
        } else {
            return 'Are you sure you typed right? Ex.: XIX';
        }

        
    }
    return arabicNum
}

//console.log(convertRomanIntoArabic('XC'))


/*
Example: convertArabicIntoRoman(483) should return 'CDLXXXIII'.
*/


function convertArabicIntoRoman(num) {
    let romanMatrix = [
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [90, 'XC'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
      ];
    if (num === 0) {
        return '';
      } else if (num === ''){
        return 0;
      
      } else if (!isNaN(num) === true){
        num = parseInt(num);
        for (let i = 0; i < romanMatrix.length; i++) {
            if (num >= romanMatrix[i][0]) {
              return romanMatrix[i][1] + convertArabicIntoRoman(num - romanMatrix[i][0]);
            }
          }
      } else {
        return 'Are you sure you typed right? Ex.: 103';
      }
     
    }

//console.log(convertArabicIntoRoman(1900))