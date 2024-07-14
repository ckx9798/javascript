/*
문제
배열을 입력받아 배열의 첫번째 요소가 삭제된 배열을 리턴해야 합니다.

입력
인자 1 : arr
임의의 요소가 담긴 배열

출력
배열의 첫 번째 요소를 삭제한 배열을 리턴해야 합니다.

주의 사항
새로운 배열을 선언 / 할당해서 리턴하지 않습니다.
기존 배열에 첫번째 요소가 삭제된 배열(주소값 동일)을 리턴해야 합니다.

입출력 예시
let output = removeFromFront([1, 2, 3]);
console.log(output); // --> [2, 3]

힌트
mdn array shift 를 검색해보세요.
*/

function removeFromFront(arr) {
  // TODO: 여기에 코드를 작성합니다.
  arr.shift();
  // 어떤건 그냥 arr.함수(); 통째로 리턴하고 이거는 왜 arr를 다시 리턴 해야하는거지???
  // 바로 앞 문제 return arr.slice(0,arr.length-1); 

  // removeFromFront([1,2,3,4]) > 콘솔에 찍어보면 1 제외한 값만 나온다!
  // 그래서 arr를 다시 리턴해줘야 [2,3,4] 가 나온다~~

  return arr;
}
