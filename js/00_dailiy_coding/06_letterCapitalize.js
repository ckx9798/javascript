/*
문제
문자열을 입력받아 문자열을 구성하는 각 단어의 첫 글자가 대문자인 문자열을 리턴해야 합니다.

입력
인자 1 : str
string 타입의 공백이 있는 알파벳 문자열

출력
string 타입을 리턴해야 합니다.

주의 사항
단어는 공백으로 구분합니다.
연속된 공백이 존재할 수 있습니다.
빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

입출력 예시
let output1 = letterCapitalize('hello world');
console.log(output1); // "Hello World"
let output2 = letterCapitalize('javascript  is sexy ');
console.log(output2); // "Javascript  Is Sexy "
*/

function letterCapitalize(str) {
  // TODO: 여기에 코드를 작성합니다.
  let word = str.split(""); // 공백포함 다 split
  if(str === "") return "";
  for(let i=0; i<word.length; i++){
    if(word[i-1] === ' ' || word[i-1] === undefined) {
      word[i] = word[i].toUpperCase(); // 재할당 값 다시 저장해주기 ????
    }
  }
  return word.join("");
}

// 공백포함 전체 split > 공백 다음 글자가 첫 글자
// if(word[i-1] === '' || i-1 인덱스가 아무것도 없을때 undef ) => i+1 인덱스가 첫글자
// if(word[i-1] === '' || i-1 인덱스가 아무것도 없을때 undef ) => toUpper
// join ("") -> 연속된 공백도 그대로 출력

// i+1의 경우 해보기 

