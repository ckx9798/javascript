/*
문제
문자열을 입력받아 연속된 한자리 홀수 숫자 사이에 '-'를 추가한 문자열을 리턴해야 합니다.

입력
인자 1 : str
string 타입의 숫자 문자열
출력
string 타입을 리턴해야 합니다.
주의 사항
0은 짝수로 간주합니다.
입출력 예시
1
2
let output = insertDash('454793');
console.log(output); // --> 4547-9-3
*/

function insertDash(str) {
  // TODO: 여기에 코드를 작성합니다.
  // i가 홀수일때 i-1도 홀수면 '-' + i 리턴

  let result = str[0]; // 콘솔에 찍어보니 0번이 안들어감 -> 시작은 str[0]부터
  for(let i=1; i<str.length; i++){ // i-1 확인해야하니까 i=1부터 시작
    if(str[i]%2!==0 && str[i-1]%2!==0) { // 2번) '223' + 3
      result = result + '-' + str[i] 
    }else{
      result = result + str[i] // 1번)'22' + '3'다시 위로 올라가서 
    }
  }
  return result;



  // let result = str[0]; // 콘솔에 찍어보니 0번이 안들어감 -> 시작은 str[0]부터
  // for(let i=1; i<str.length; i++){ // i-1 확인해야하니까 i=1부터 시작
  //   if(str[i]%2===1 && str[i-1]%2===1) { // 2번) '223' + 3
  //     result = result + '-'
  //   }
  //   result = result + str[i] // 1번)'22' + '3'다시 위로 올라가서 
  // }
  // return result;
}
