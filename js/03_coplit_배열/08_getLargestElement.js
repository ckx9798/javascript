/*
문제
배열을 입력받아 가장 큰 요소를 리턴해야 합니다.

입력
인자 1 : arr
number 타입의 정수로 구성된 배열

출력
number 타입을 리턴해야 합니다.

입출력 예시
let output = getLargestElement([1, 4, 3]);
console.log(output); // --> 4

output = getLargestElement([-4, -2, -9]);
console.log(output); // --> -2
*/


function getLargestElement(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // arr = [1,5,2]; > 5
  // return Math.max(...arr); < 내가 생각한 코드 1

  // 0번째 수를 가장 크다고 저장해두기
  let max = arr[0];
  // 반복문 돌리면서 i번째 수가 0번째보다 크면 max=arr[i]
  for(let i=0; i<arr.length; i++){
    if(arr[i] > max) {
      max = arr[i];
    }
  }
  return max;
}

// reference code
// function getLargestElement(arr) {
//   // javascript의 다양한 반복문 문법(syntax)을 검색해 봅니다. (`mdn for in` 또는 `mdn for of`)
//   let max = arr[0];
//   for (let el of arr) {
//     if (el > max) {
//       max = el;
//     }
//   }
//   return max;
// }

//done