function colorChange(){
let data = Math.random()*500;
let data1=Math.ceil(data);
 
let data2 = Math.random()*500;
let data3=Math.floor(data2);

let data4= Math.random()*500;
let data5=Math.floor(data4);

let data6= Math.random();
let data7 = Math.ceil(data6);

let result =`rgba(${data1},${data3},${data5},${data7})`;

let box = document.querySelector(".box");
box.style.backgroundColor = result;
let print = document.querySelector(".result");
print.innerHTML = result;
}
let btn = document.querySelector(".click");
btn.addEventListener("click",()=>{
    colorChange();
});
