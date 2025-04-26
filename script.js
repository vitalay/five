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
// for (let i = 0; i < 10; i++) {
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

const out2 = document.querySelector('.out-2')
const btn2 = document.querySelector('.b-2').addEventListener('click', function t2() {
  for (let i = 2; i <= 122; i++) {
     if (i % 2 == 0) 
    out2.innerHTML += i + ' ';
  }

})
const out3 = document.querySelector('.out-3')
const btn3 = document.querySelector('.b-3').addEventListener('click', function t3() {
  for (let i = 25; i >= 7; i--) {
    
      out3.textContent += i + ' ';
  }
})


const out4 = document.querySelector('.out-4')
document.querySelector('.b-4').addEventListener('click', function t4() {
  for (let i = 77; i >= 35; i -= 3) {
    out4.textContent += i + '_';
  }
})


document.querySelector('.b-5').addEventListener('click',
function t5() {
  let out = ''; // Создаём пустую строку
  for (let i = 1; i <= 17; i++) {
    out += i; // Добавляем текущее число
    if (i % 2 === 0) {
      out += '_**'; // Если чётное
    } else {
      out += '_*'; // Если нечётное
    }
  }
  document.querySelector('.out-5').textContent = out;
})


// document.querySelector('.b-6').addEventListener('click',
  
//   function t6() {
   
//     let out6 = ''; // Создаём пустую строку
//     for (let i = 0; i <= 2; i++) {
    
//       out6 += '******<br>'; // Добавляем текущее число
//       // out6.innerHTML  = "******";
//       // console.log(out6);
//     }
//     document.querySelector('.out-6').textContent = out6;

//   })

//  document.querySelector('.b-6').addEventListener('click',
// function t6() {
//   const count = parseInt(document.querySelector('.i-6').value); // Получаем число строк
//   console.log(count);
//   let out = ''; // Создаём пустую строку для результата
 
//   for (let i = 0; i < count; i++) {
//     out += '******<br>'; // Добавляем 6 звёздочек и перенос
   
//   }

//   document.querySelector('.out-6').innerHTML = out; // Выводим с поддержкой HTML
// })
document.querySelector('.b-6').addEventListener('click',
  function t6() {
    let out = ''; // Создаём пустую строку для результата
    for (let i = 0; i < 3; i++) {
      out += '******<br>'; // Добавляем 6 звёздочек и перенос
     
      
      // Добавляем 6 звёздочек и перенос
    }
    document.querySelector('.out-6').innerHTML = out; // Выводим с поддержкой HTML
  })

document.querySelector('.b-7').addEventListener('click', function t7(){

  const count = document.querySelector('.i-7').value;
  let out = '';
  for (let i = count; i > 0; i--) {
    out += i + ' ';
  }
  document.querySelector('.out-7').textContent = out;
})


