/*
문제
문자열을 입력받아 아이소그램인지 여부를 리턴해야 합니다. 아이소그램(isogram)은 각 알파벳을 한번씩만 이용해서 만든 단어나 문구를 말합니다.

입력
인자 1 : str
string 타입의 공백이 없는 알파벳 문자열

출력
boolean 타입을 리턴해야 합니다.

주의 사항
빈 문자열을 입력받은 경우, true를 리턴해야 합니다.
대소문자는 구별하지 않습니다.

입출력 예시
let output = isIsogram('aba');
console.log(output); // false

output = isIsogram('Dermatoglyphics');
console.log(output); // true

output = isIsogram('moOse');
console.log(output); // false
*/

// function isIsogram(str) {
//   // TODO: 여기에 코드를 작성합니다.
//   // 빈 객체 설정, 대소문자 통일하기
//   // str 순회하면서 이미 있는 정보인지 확인해보기
//   let obj = {}
//   str = str.toUpperCase();
//   for(let i=0; i<str.length; i++){
//     if( obj[str[i]] ){  // 2. 그 다음거 돌았을때 그 값이 있으면 false로 끝내버리기
//       return false
//     }
//     obj[str[i]] = true // 1. 처음값은 값이 없어서 undefined라서 true 할당해주고 
//   }
//   return true
// }

function isIsogram(str) {
  // TODO: 여기에 코드를 작성합니다.
  // 빈 객체 설정, 대소문자 통일하기
  // str 순회하면서 이미 있는 정보인지 확인해보기
  let obj = {}
  str = str.toUpperCase();
  for(el of str){
    if( obj[el] ){  // 2. 그 다음거 돌았을때 그 값이 있으면 false로 끝내버리기
      return false
    }
    obj[el] = true // 1. 처음값은 값이 없어서 undefined라서 true 할당해주고 
  }
  return true
}
