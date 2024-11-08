/*
문제
문자열을 입력받아 문자열을 구성하는 각 문자(letter)를 키로 갖는 객체를 리턴해야 합니다.
각 키의 값은 해당 문자가 문자열에서 등장하는 횟수를 의미하는 number 타입의 값이어야 합니다.

입력
인자 1 : str
string 타입의 공백이 없는 문자열

출력
각 문자를 키로 갖는 객체를 리턴해야 합니다.

주의 사항
빈 문자열을 입력받은 경우, 빈 객체를 리턴해야 합니다.

입출력 예시
let output = countAllCharacters('banana');
console.log(output); // --> {b: 1, a: 3, n: 2}
*/

function countAllCharacters(str) {
  // TODO: 여기에 코드를 작성합니다.
  let obj = {};
  for(let i=0; i<str.length; i++){
    // str[i] 의 개수 세기
    if( str[i] in obj ){ // ??? obj 객체 안에 key 가 있으면??
      obj[str[i]]++;
    }else{
      obj[str[i]] = 1;
    }
  }
  return obj;
}

/*
function countAllCharacters(str) {
  // TODO: 여기에 코드를 작성합니다.
  // 객체 리턴
  let obj = {};
  // 문자열을 반복문으로 돌려
  for(let i=0; i<str.length; i++){
    // 객체의 키가 str[i] 일때 값이 없다면
    if( obj[str[i]] === undefined ){
      obj[str[i]] = 0; // 0부터 시작해준다 >> obj[b]=0;
    }
    obj[str[i]]++;
  }
  return obj;
}
*/