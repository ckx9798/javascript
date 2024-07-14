/*
문제
문자열을 입력받아 가장 많이 반복되는 문자(letter)를 리턴해야 합니다.

입력
인자 1 : str
string 타입의 공백이 있는 문장

출력
string 타입을 리턴해야 합니다.

주의 사항
띄어쓰기는 제외합니다.
가장 많이 반복되는 문자가 다수일 경우, 가장 먼저 해당 횟수에 도달한 문자를 리턴해야 합니다.
빈 문자열을 입력받은 경우, 빈 문자열을 리턴해야 합니다.

입출력 예시
let output = mostFrequentCharacter('apples not oranges');
console.log(output); // --> 'p'

output = mostFrequentCharacter('hello world');
console.log(output); // --> 'l'

output = mostFrequentCharacter('   ');
console.log(output); // --> ''

output = mostFrequentCharacter('');
console.log(output); // --> ''

output = mostFrequentCharacter('abba');
console.log(output); // --> 'b'
*/

function mostFrequentCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  // 공백제거
  // 문자에 공백을 없애고 싶으면 
  // 양끝을 없애는 건 trim 엑셀이랑 똑같음
  // split으로 공백기준 나누고, join
  // let word = str.replace(/ /g, '');

  str = str.replace(/ /g, '');
  let arr = {}
  let max = 0
  let result = '';
  for(value of str){
    arr[value] = (arr[value]||0) +1
    if(max < arr[value]){
      max = arr[value];
      result = value
    }
  }
  return result;
}


/*
function mostFrequentCharacter(str) {
  // TODO: 여기에 코드를 작성합니다.
  // 공백을 일단 없애  let result = str.replace(/ /g, '');
  // banana라고 가정
  let word = str.replace(/ /g, '');

  // 20번처럼 객체 프로퍼티로 구해서 max 카운트에 해당하는 키를 리턴하자
  let obj = {alphabet:'', count:0};
  // 문자열을 돌리면서 없으면 0 있으면 카운트를 올려
  for (let i=0; i<word.length; i++){
    if( obj[word[i]] === undefined ){
      obj[word[i]] = 0; // index3까지 돌면 b:0, a:2, n:1
    }
    else {
      obj[word[i]]++;
    }

    if( obj[word[i]] > obj['count'] ) {
      obj['count'] = obj[word[i]];
      obj['alphabet'] = word[i];
    }
  }
  return obj['alphabet']
}
*/