/*
문제
배열과 수를 입력받아 수가 가리키는 인덱스에 해당하는 객체의 'name' 속성값을 리턴해야 합니다.

입력
인자 1 : arr
객체를 요소로 갖는 배열
인자 2 : num
number 타입의 정수 (num >= 0)

출력
해당되는 객체의 'name' 속성값을 리턴해야 합니다.

주의 사항
빈 배열을 입력받은 경우, 'no name'을 리턴해야 합니다.
배열의 범위를 벗어나는 인덱스를 입력받은 경우, 마지막 객체의 'name' 속성값을 리턴해야 합니다.

입출력 예시
let output = getValueOfNthElement([{ name: 'Kelly' }, { name: 'Anna' }], 1);
console.log(output); // --> 'Anna'

output = getValueOfNthElement([{ name: 'Kelly' }, { name: 'Anna' }], 2);
console.log(output); // --> 'Anna'

output = getValueOfNthElement(
  [{ name: 'Jim' }, { name: 'Tim' }, { name: 'Pooh' }],
  1
);
console.log(output); // --> 'Tim'

output = getValueOfNthElement([], 0);
console.log(output); // --> 'no name'
*/

function getValueOfNthElement(arr, num) {
  // TODO: 여기에 코드를 작성합니다.
  // 해당 인덱스 키의 값(value)를 출력
  // arr가 빈 배열이면 'no name'
  if(arr.length===0) return 'no name';
  // num(인덱스)가 length-1보다 크면 마지막 인덱스값의 'name' 리턴
  else if(num > arr.length-1){  // num >= arr.length-1
    return arr[arr.length-1]['name'];
  }
  // 위 조건이 다 아니면 arr 중 num(인덱스)의 'name' 출력하기
  else return arr[num]['name'];
}
