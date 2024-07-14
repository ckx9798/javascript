/*
문제
1 이상의 자연수를 입력받아 소수(prime number)인지 여부를 리턴해야 합니다.

입력
인자 1 : num
number 타입의 수

출력
boolean 타입을 리턴해야 합니다.

입출력 예시
let output = isPrime(2);
console.log(output); // --> true
output = isPrime(6);
console.log(output); // --> false
output = isPrime(17);
console.log(output); // --> true

힌트
자바스크립트 내장 객체인 Math를 활용해 불필요한 연산을 줄일 수 있습니다. (javascript square root 또는 자바스크립트 제곱근)
*/

function isPrime(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 소수 1과 자기자신만을 약수로 갖는 수   1제외

  // Math.sqrt(num) ??? >> 반복하는 횟수 줄이려고
  
  if(num===1) return false;
  if(num===2) return true;
  if(num%2===0) return false; //짝수 걸러졌고 그 다음 3부터 시작

  let sqrt = Math.sqrt(num);
  for(let i=3; i<=sqrt; i+=2){
    if(num%i===0) return false;
  }
  return true;
}
