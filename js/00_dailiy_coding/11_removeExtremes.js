/*
문제
문자열을 요소로 갖는 배열을 입력받아 가장 짧은 문자열과 가장 긴 문자열을 제거한 배열을 리턴해야 합니다.

입력
인자 1 : arr
string 타입을 요소로 갖는 배열
arr[i].length는 20 이하

출력
배열을 리턴해야 합니다.

주의 사항
가장 짧은 문자열의 길이와 가장 긴 문자열의 길이가 같은 경우는 없습니다.
가장 짧은 문자열 또는 가장 긴 문자열이 다수일 경우, 나중에 위치한 문자열을 제거합니다.

입출력 예시
let output = removeExtremes(['a', 'b', 'c', 'def']);
console.log(output); // --> ['a', 'b']
*/

function removeExtremes(arr) {
  // ['where', 'is', 'the', 'longest', 'word']
  let shortLength = 20; // 20보다 작은거보다 더 작아야 shortest
  let longLength = 0; // 0보다 큰거보다 더 커야 longest
  let shortIdx = 0;
  let longIdx = 0;
  for(let i=0; i<arr.length; i++){
    if(arr[i].length <= shortLength) {
      shortLength = arr[i].length; // 작거나 같아야 나중꺼가 마지막에 남음!
      shortIdx = i
    }
  }
  for(let i=0; i<arr.length; i++){
    if(arr[i].length >= longLength) {
      longLength = arr[i].length; // 크거나 같아야 나중꺼가 마지막에 남음
      longIdx = i;
    }
  }
  // 저 shortIdx 랑 longidx 아니면 다 push 해주기
  let result = [];
  for(let i=0; i<arr.length; i++){
    if(i!==shortIdx && i!==longIdx){
      result.push(arr[i]);
    }
  }
  return result
}
