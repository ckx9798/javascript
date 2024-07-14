/*
문제
문자열을 입력받아 해당 문자열을 처음부터 한 글자(letter)씩 다시 작성하려고 합니다. 이 때, 한 글자를 추가할 때마다 부분적으로 완성된 문자열을 전부 이어붙인 문자열을 리턴해야 합니다.

입력
인자 1 : str
string 타입의 문자열

출력
string 타입을 리턴해야 합니다.

주의 사항
이중 반복문(double for loop)을 사용해야 합니다.
str.slice, str.substr, str.substring 사용은 금지됩니다.
빈 문자열을 입력받은 경우에는 빈 문자열을 리턴해야 합니다.

입출력 예시
let output = makeMarginalString('abc');
console.log(output); // --> 'aababc'

output = makeMarginalString('flower');
console.log(output); // --> 'fflfloflowfloweflower'

output = makeMarginalString('');
console.log(output); // --> ''
*/

function makeMarginalString(str) {
  // TODO: 여기에 코드를 작성합니다.
  let word = '';
  for(let i=0; i<str.length; i++){
    // str[3]='b'
    // str[0] = d.  >. x
    // str[1] = o.  > d do
    //...  
    // str[5]
    for(let x=0; x<=i; x+=1){
      word = word + str[x];
      // d
      // do
    }
  }
  return word;
}