문제
배열을 입력받아 차례대로 배열의 첫 요소와 마지막 요소를 키와 값으로 하는 객체를 리턴해야 합니다.

입력
인자 1 : arr
string 타입을 요소로 갖는 배열

출력
객체를 리턴해야 합니다.

주의 사항
빈 배열을 입력받은 경우, 빈 객체를 리턴해야 합니다.
입력으로 받는 배열을 수정하지 않아야 합니다.

// 입출력 예시
// let arr = ['Queen', 'Elizabeth', 'Of Hearts', 'Beyonce'];
// let output = transformFirstAndLast(arr);
// console.log(output); // --> { Queen : 'Beyonce' }
// arr = ['Kevin', 'Bacon', 'Love', 'Hart', 'Costner', 'Spacey'];
// output = transformFirstAndLast(arr);
// console.log(output); // --> { Kevin : 'Spacey' }

// function transformFirstAndLast(arr) {
//   // TODO: 여기에 코드를 작성합니다.
//   let obj={}
//   if(arr.length===0) return {}
//   let first = arr[0]
//   let last = arr[arr.length-1]
//   obj[first] = last
//   return obj
// }

function makeNewObj(arr) {
  let answer = {}
  const firstA = arr[0]
  const lastA = arr[arr.length-1]
  answer[firstA] = lastA
  return answer
}

console.log(makeNewObj(["qwe","asd","1q"]))