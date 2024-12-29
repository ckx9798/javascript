/*
문제
문자열을 입력받아 문자열에서 가장 긴 단어를 리턴해야 합니다.

입력
인자 1 : str
string 타입의 공백이 있는 알파벳 문자열

출력
string 타입을 리턴해야 합니다.

주의 사항
단어는 공백 한 칸으로 구분합니다.
가장 긴 단어가 2개 이상이면 첫번째로 등장하는 단어를 리턴해야 합니다.

입출력 예시
let output = getLongestWord('I love codestates');
console.log(output); // --> "codestates"

output = getLongestWord('Teamwork skills will take you anywhere');
console.log(output); // --> "Teamwork"
*/

function getLongestWord1(arr) {
  let splitArr = arr.split(" ");
  let longest = splitArr[0];
  for (let i = 1; i < splitArr.length; i++) {
    if (splitArr[i].length > longest.length) {
      longest = splitArr[i];
    }
    // return longest;  여기 있으면 for문 처음 돌때 바로 반환 되서 0또는1번 인덱스가 출력
  }
  return longest;
}

function getLongestWord2(arr) {
  let splitArr = arr.split(" ");
  let lengths = splitArr
    .map((word) => word)
    .sort((a, b) => b.length - a.length);
  return lengths[0];
}

// let output = getLongestWord1("Teamwork skills will take you anywhere");
// console.log(output); // --> "Teamwork"

// let output1 = getLongestWord1("I love codestates");
// console.log(output1); // --> "codestates"

let output1 = getLongestWord2("I love codestates");
console.log(output1); // --> "codestates"
