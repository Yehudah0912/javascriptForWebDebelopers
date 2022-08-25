let a = 6;
let b = 9;

function simpleTag(strings, ...expressions) {
  console.log(strings);
  for(const expression of expressions) {
    console.log(expression);
  }
  return 'foobar';
}
// 将标签函数中转义的模板字符返回
function zipTag(strings, ...expressions) {
  return strings[0] + expressions.map((e,i)=>`${e}${strings[i+1]}`).join('');
}
let taggedResult = simpleTag`${ a } + ${ b } = ${ a + b }`;
// ["", " + ", " = ", ""]
// 6
// 9
// 15

console.log(taggedResult);  // "foobar"

let foo = {toString:()=>'World'};
console.log(`Hello,${foo}`);