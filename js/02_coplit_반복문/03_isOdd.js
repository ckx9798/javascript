/*
문제
수를 입력받아 홀수인지 여부를 리턴해야 합니다.

입력
인자 1 : num
number 타입의 정수

출력
boolean 타입을 리턴해야 합니다.

주의 사항
반복문(while)문을 사용해야 합니다.
for문 사용은 금지됩니다.
나눗셈(/), 나머지(%) 연산자 사용은 금지됩니다.
0은 짝수로 간주합니다.

입출력 예시
let output = isOdd(17);
console.log(output); // --> true

output = isOdd(-8);
console.log(output); // --> false
*/

function isOdd(num) {
  // TODO: 여기에 코드를 작성합니다.
  num = Math.abs(num); //일단 절대값으로 양수만들기
  while(num >= 0) {
    if(num===0) return false; //0이라면 짝수라고 하기
    if(num===1) return true; // 1만 남으면 홀수
    num=num-2 // 2씩 계속 빼기 -> num이 0보다 크면 또 5번줄로 돌아가
  }

}
