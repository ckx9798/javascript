/*
문제
수를 입력받아 2의 거듭제곱인지 여부를 리턴해야 합니다.

입력
인자 1 : num
number 타입의 정수 (num >= 1)

출력
boolean 타입을 리턴해야 합니다.

주의 사항
반복문(while)문을 사용해야 합니다.
2의 0승은 1입니다.
Number.isInteger, Math.log2, Math.log 사용은 금지됩니다.

입출력 예시
let output1 = powerOfTwo(16);
console.log(output1); // true
let output2 = powerOfTwo(22);
console.log(output2); // false
*/

function powerOfTwo(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 2를 여러번 곱한거
  // 일단 1=2의0승
  if(num===1) return true;
  if(num%2){ // num%2 >>> true >>> 1
    return false; // 홀수면 다 false 출력
  }
  // 짝수면 while 문으로 넘기기
  let pow = 2;
  while( pow < num ){
    pow=pow*2
  }
  return pow === num ? true : false;


}

function powerOfTwo(num) {
  // TODO: 여기에 코드를 작성합니다.
  // 반복문 사용 -> 2로 계속 나눠서 몪이 1이 될 때까지 나머지가 0이면 true 리턴
  // 나머지가 1이 나오는 경우 false
  // num이 1이 되기 전까지 반복
  while (num >= 1) {
    // num이 1일 경우 true 리턴
    if (num === 1) {
      return true;
    }
    // num을 2로 나눴을 때 나머지가 0인 경우 num을 2로 나눈 수를 num에 새로 할당
    if (!(num % 2)) { // num%2===0
      num = num / 2;
    }
    // num을 2로 나눴을 때 나머지가 0이 아닌 경우 false를 리턴
    else {
      return false;
    }
  }
}

function powerOfTwo(num) {
  while(num>1){
    num = num/2
  }
  if(num===1) return true;
  else return false;
}

