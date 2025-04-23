// const div = document.querySelectorAll('.one')
// console.log(div);
// for (let i = 0; i < div.length; i++) {
//   div[i].style.backgroundColor = 'red';
//   div[0].onclick = f
// }
//   function f() {
//     console.log('hello word')
//   }
//   const b = document.getElementsByClassName('one')
//   console.log(b);
//   const c = document.getElementsByTagName('div')
//   console.log(c);
// for (let i = 0; i < b.length; i++) {
//   b[i].style.border = '5px solid green';
//   console.log(b);
// }
// document.querySelector('button').onclick = () => {
//   let r = document.querySelectorAll('input[type="radio"]');
// console.log(r);
//  for (let i = 0; i < r.length; i++) {
//    if (r[i].checked) {
//      console.log(r[i].value);
//    }
//  }
     
// }
// let two = '';
// for (let i =0; i < 10; i++) {
//   if (i == 6) continue;
//   two += i + ' ';
// }
// document.querySelector('.two').innerHTML = two;
const out = document.querySelector('.out-1')
const btn = document.querySelector('.b-1').addEventListener('click', function t1(){
  for (let i = 1; i <= 50; i++){
   out.innerHTML += i + ' ';
}
})

