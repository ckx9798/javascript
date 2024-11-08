/*
문제
2차원 배열(배열을 요소로 갖는 배열)을 입력받아 각 배열을 이용해 만든 객체를 리턴해야 합니다.

입력
인자 1 : arr
배열을 요소로 갖는 배열
arr[i]는 string 타입을 요소로 갖는 배열
arr[i].length는 0 또는 2

출력
arr[i]의 첫 번째 요소를 키, 두 번째 요소를 값으로 하는 객체를 리턴해야 합니다.

주의 사항
중복되는 키의 경우, 초기의 값을 사용합니다.
빈 배열을 입력받은 경우, 빈 객체를 리턴해야 합니다.
arr[i]의 길이가 0인 경우, 무시합니다.

입출력 예시
const arr = [
  ['make', 'Ford'],
  ['model', 'Mustang'],
  ['year', '1964'],
  ['make', 'Bill'],
];
let output = convertListToObject(arr);
console.log(output) // -->
{
  make : 'Ford'
  model : 'Mustang',
  year : '1964'
}
*/

function convertListToObject(arr) {
  // TODO: 여기에 코드를 작성합니다.
  // [ ['a','a-1'], ['b','b-1'], ...  ]
  let obj = {};
  // arr[i][0] 는 키, arr[i][1] 는 값
  // arr[i].length > 0 일때만, 
  // 만약 arr[1][0] 과 arr[2][0]이 같다면 arr[1][0]을 쓰자
  // 객체의 키 arr[i][0]이 새로운 거라면

  for(let i=0; i<arr.length; i++){
    if(arr[i].length > 0 && obj[arr[i][0]] === undefined){
      obj[arr[i][0]] = arr[i][1]; // 0보다 크다면 0번째는 키, 1번째는 값
    }
  }
  return obj;

  /*
  el[0] in obj 

  for of
  for in
  */



}
