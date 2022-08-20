
//                   //-------------------for of loop*/vsv ----------
// for(let color of colors){
//     console.log(color);
// }

// let name="arf";

// let age=15;

// let inretsted=["i become a full stack devloper"]

// function buying(){
//     const msg=`my name is ${name},may age is ${age},i love ${inretsted}`;
//     console.log(msg);
// }

// buying();

// let msg1= prompt("Your age is over 18");

// if(17 <= msg1){
//     document.write("<h1>yes your allowed</h1>");
// }

// else{
//         document.write("<h1>no you cant GO</h1>");
// }

// closure fuction must know this function

// let add=(function (){
//     var plus=0;
//     return function (){
//         plus+=1;
//     return plus;
//     }
// })();

// //  function on(){

// // document.getElementById("p").innerHTML=add();
// //  }

// // =-----------------------------------------------array.reduce() /////& ARRAY.REDUCERIGHT()---------------------

// // let my=[175,25,50];

// // document.getElementById("p").innerHTML=my.reduce(sub);

// // function sub(total,num)
// // {
// //     return total-num;
// // }

// //---------------------------------------------math.object------------------------///---------------------

// // document.write(Math.max(2,4,5,8,9,10,21582,-85115));

// // function add(){
// //     let campany=["Apple","Google","Netflix"];
// //     for (let c of campany){
// //         console.log(c);
// //     }
// // }

// // let msg = "Press 1 to view Company ";
// // console.log(msg);

// // let ch=prompt("PLS Replay Youtr Choicess :")

// // if (ch==1){
// //     add()
// // }
// // else{

// // console.log("invalid index");
// // }

// // -------------------Simple if conditon results finder ---------------------------------------------------//////////////

// // let q=prompt("Enter your Marks : ");

// // if (q>=75 && q<=100){
// //     console.log("Results : A ");
// // }
// // else if (q>=65 && q<=74) {
// //     console.log("Results : B");
// // }
// // else if (q>=55 && q<=64){
// //     console.log("Results : C");
// // }
// // else if (q>=35 && q<=54){
// //     console.log("Results : S");
// // }
// // else if (q>=0 && q<=34){
// //     console.log("Results : W");
// // }
// // else{
// //     console.log("Invalid index");
// // }

// // let a=['js','java','python','swift','flutter','dart','node.js'];

// // for (let pro of a){
// //     console.log(pro);
// // }

// ///////////////////////////---------finnd odd and even numbers ---------------------------------------

// // var a=prompt("enter a number :");

// // if (a % 2 ==0){
// //     console.log("Even number");
// // }
// // else if (a % 2 !==0){
// //     console.log("Odd number s");
// // }

// //////////////////////-----------for loop------------

// // for (let a=0; a<=5; a++){
// //     console.log(a);
// // }

// /////////////////--------------While looops -------------------------------------

// // var name="arf";

// // let i=0;

// // while(i<=10){
// //     console.log(i+" "+name);
// //     i++
// // }

// //////////////---------------------------For in looppps-----------------------------------

// // const item=['google','facebook','netflix','apple'];

// // console.log(item);

// // for (let key in item){
// //     console.log(item[key]);
// // }

// // /////////---------------------for of loops ---------------------

// // for (let key of item){
// //     console.log(key);
// // }

// ///////------------confirm window in browser

// // let a=confirm("fuck you");

// ////////////////////////////////---------------month finde rwith if condition -------------------------------

// // let month=prompt("Enter a month :");

// // if (month==1 || month>=3 && month<=12){
// //     for (let i= 1; i<=31; i++ ){
// //         console.log("Date : ",i);
// //     }
// // }

// // else if(month==2){
// //     for (let i= 1; i<=29; i++ ){
// //         console.log("Date : ",i);
// //     }
// // }
// // else{
// //     console.log("Invalid index");
// // }

// ///////////-------------------------------------------------jascript objects  -------------------

// // let user = {
// //     name:"arf",
// //     age:16,
// //     profession:"Softaware Developer",
// //     city:"NTR"

// // }
// // // console.log(user);

// // for (let x in user){
// //     console.log(x);
// // }

// ////////////////////////////////////-----------------Factory funcyion in js----------------

// // function aperson(name){

// //     return{
// //         name,
// //         greeting(){
// //             let msg =`My name is ${this.name}`
// //             console.log(msg);
// //         }

// //     }

// // }

// // let a=aperson("Arf");

// // a.greeting()
// ///////////////////---------------------------Dynamic Object --------------------

// // let person ={
// //     name:"arf"
// // }

// // person.age=16;
// // person.gender="female";

// // delete person.gender;

// // console.log(person);

// //-----------------using Refernce datatypes in function -----------------------------------------------

// // let cart ={
// //     value:5
// // };

// // function updatecart(cart){
// //     cart.value++;
// // }

// // updatecart(cart);

// // console.log(cart);

// //////////////--------------Objetc creating oppps

// // const person = {
// //     name:'arf',
// //     getfullname(){
// //         let msg=`My name is ${this.name}`;
// //         console.log(msg);
// //     }
// // }
// // for (let key in person)
// //     console.log(key,person[key]);

// // for (let key of Object.keys(person))
// //     console.log(key);
// //     for (let key of Object.entries(person))
// //     console.log(key);

// // if('name' in person){
// // console.log("Yes");
// // }else{
// //     console.log(no);
// // }

// ////------------------------cloning object ----------------//////////////////////////////////////

// // const person = {
// //     name:'arf',
// //     getfullname(){
// //         let msg=`My name is ${this.name}`;
// //         console.log(msg);
// //     }
// // }

// // let person2={
// //     ...person,
// //     age:16
// // };

// // console.log(person2);

// //////////-------------------------MATH objetc-------------------in js

// // console.log(Math.PI);
// // console.log(Math.ceil(0.5));

// // function getrandom(min,max){
// //     min=Math.ceil(min);
// //     max=Math.floor(max);
// //     return Math.floor(Math.random()*(max-min)+min);
// // }

// // getrandom(15,100);

// // console.log(Math.round(1.6));

// // console.log(Math.max(12,45,25,86,95,58,46,25,24));
// // console.log(Math.min(12,45,25,86,95,58,46,25,24));

// // var marks=[15,75,85,62,14,35];

// // var result=Math.max(...marks);
// // var result2=Math.min(...marks);
// // console.log("Mximum Mark : ",result);
// // console.log("Minimum Mark : ",result2);

// //----------------------string primitives in javascript ---------------------------------------////

// // const name ="arf";

// // var msg =`my name is "Hi!!!" ${name}`
// // console.log(msg);

// // let msg2='my name is \n"Saahib Abdhi"'
// // console.log(msg2);

// ///-----------------------=============================javscript date object in js

// // const date=new Date();
// // console.log("Date : ",date.getDate());
// // console.log("year : ",date.getFullYear());
// // console.log("Hour : ",date.getHours());
// // console.log("Month : ",date.getMonth()+1);

// // //custom Date using js

// // let newdate=new Date("1999 july 26");

// // console.log(newdate.getDate());

// ///---====--in javscript changing time in javscript

// // let [month,date,year]= new Date().toLocaleDateString("en-UK").split("/");

// // console.log(month,date,year);

// // ------------------------adding an array element in javascript important concept

// // let food =["biriyani","kabsa","mandhi","majboos"];

// // console.log(food);
// // console.log(food[0]);

// // let a=prompt("Enter your fav food :");

// //push method
// // food.push(a)
// // console.log(food);

// //unshift method
// // food.unshift(a)
// // console.log(food);

// //splice
// // food.splice(3,0, a)
// // console.log(food);

// // ------------------------searching an array element in javascript important concept

// // console.log(food.includes("kabsa"));

// // const item=[
// //     {id :1, item:"Apple"},
// //     {id :2, item:"male"},
// // ]

// // let result=item.find(function(order){
// //     return order.item==="male"
// // })

// // console.log(result);

// // ----------------Arrow function in javscript

// // const item=[
// //     {id :1, item:"Apple"},
// //     {id :2, item:"male"},
// // ]

// // let result=item.find((order) =>  order.item==="male")

// // console.log(result);

// ///--------------removing an array element in javascript

// // const users=["arf","abdhi","afs","aks"];

// // console.log(users);
// // users.pop()
// // users.shift()
// // users.splice(2,1)
// // console.log(users);

// ////------==========================---------------how to empty javscript array-------------------------------------------------------

// // let numbers =[1,5,7,8,9,6,3];

// // console.log(numbers);

// //solution 1

// // numbers=[];   //most javscript developers using this solution

// // console.log(numbers);

// //solution 2

// // numbers.length=0;
// // console.log(numbers);

// //solution3    =============pls dont use solution 3

// // while(numbers.length){
// //     numbers.pop();
// // }

// // console.log(numbers);

// //------------------combining && exctracting an array

// // const stock=["chicken","beef","mutton","prwn"];

// // const ex=["cattle fish","fish"];
// // // //combine
// // // let all=stock.concat(ex);

// // // console.log(all);
// // // //extract

// // // let imporatantis=all.slice(2,4);

// // // console.log(imporatantis);

// // /////while using spread opretor in es6 with modern javscript

// // let all=[...stock,45,{name:"aathif"},...ex]

// // console.log(all);

// // array with looopppppp=====================================

// // let code=["eat","sleep","code"];
// // //ising for -of
// // for (ha of code){
// //     console.log(ha);
// // }
// // //using for -in
// // for (a in code){
// //     console.log(code[a]);
// // }

// //using for -Each

// // code.forEach(ex =>console.log(ex));

// //--////==============array join and splitting ]

// // const a =["hi","hello","arf"];

// // var all=a.join("/ ");

// // console.log(all);

// ///and splitting

// // let fullname="Aathif Arafath";

// // var name2=fullname.split(" ");

// // console.log(name2);

// /////===========--------------------sorting an array is javascript

// // const anarray=[1,8,9,54,52,2];

// // anarray.sort((a,b) => a-b);

// // anarray.reverse();
// // console.log(anarray);

// // const staf=[
// // {id:3,name:"nifraan"},
// // {id:1,name:"arf"},
// // {id:2,name:"simak"},
// // {id:5,name:"sim"},
// // {id:4,name:"afs"}

// // ];

// // staf.sort((a,b) =>{
// //     if(a.id<b.id)return -1;

// //     if(a.id>b.id)return 1;

// //     return 0;

// // });
// // console.log(staf);

// // const age=[22,55,33,66];

// // let allowed=age.every(function(value, index){
// //     return value >=18;

// // });

// // console.log(allowed);

// // //odd or even

// // const num=[1,2,3,5,4,6];

// // let check=num.some(function(value) {
// //     return value %2==0;
// // })

// ///------------------=========filtering an array//***********filter is best choice  */

// // const age=[22,55,12,25,10];

// // let adultonly=age.filter( (value) => {
// //     return value>=18;

// // });

// // console.log("adults",adultonly);

// // let childonly=age.filter((value)=>{
// //     return value<=18;

// // });

// // console.log("childs",childonly);

// // const num=[1,2,3,4,5,6];

// // let odd=num.filter((value)=>{
// //     return value %2==1;
// // });

// // console.log("odd numbers : ",odd);

// // let even=num.filter((value)=>{
// //     return value %2==0;
// // });

// // console.log("even numbers :",even);

// // -------------ok! make flipkart aplication using filter property in javascript

// const phone=[
//     {Name:"Apple",Price:25000},
//     {Name:"Samsung note-10",Price:11000},
//     {Name:"Redmi POCO Series",Price:9999},
//     {Name:"Realmi 9A",Price:5600},
//     {Name:"ONE+ 6",Price:18000},
//     {Name:"ViVO 1s",Price:3500},
// ];

// console.table(phone);

// let filterprice=prompt("Enter your price to BUY : ");

// let low_phone = phone.filter((value) => value.price <=filterprice );
// console.table(low_phone);

// //////--------------------------javscript array finding

// // console.log(phone);

// // let finding=phone.findIndex((value) => value.price<=3500 );

// // console.log(finding);

// //=========>>>>>>>>>>>>>>>>>>>javscript map funcition <<<<<<<<<

// // const numbres=[1,2,3,4,5,6,7,8,9];
// // console.log(numbres);

// // let total=numbres.map((val)=> val*2);

// // console.log(total);

// // const username=[
// //     {first_name:"Aathif",last_name:"Arafath"},
// //     {first_name:"Saahib",last_name:"Abdhi"},
// //     {first_name:"Mohammed",last_name:"Akasath"},
// //     {first_name:"Mohammed",last_name:"Afahsn"}
// // ];

// // let fullname1=username.map(function(val){
// // let FullName=[val.first_name,val.last_name].join(" ");
// // let obj={FullName}

// // return obj;

// // });

// // console.log(fullname1);

// //===>>>>>>>>>>>>>>>>how to use chaining method in javscropt <<<

// // const products=[
// //     {name:"Apple",price:35000},
// //     {name:"Samsung s20 Ultra",price:23000},
// //     {name:"Realme",price:15600},
// //     {name:"Computer",price:7000},
// // ];

// // //sorting

// // let sorting=products.sort(function(a,b){
// //     return a.price-b.price;

// // });

// // console.table(sorting);

// // //filter

// // let filtering=sorting.filter(function(val){
// //     return val.price<=20000;
// // });
// // console.table(filtering);

// // //maping

// let maping=products.map(function(val){
//     return val.name+" - $ "+val.price;
// });

// console.table(maping);

// ===>>>>>>>>javscript .reduce method

// const nums=[25,35,45,55,65,75,85,95];

// console.log(nums);

// let total=nums.reduce((previousval,currentval) => previousval+currentval );

// console.log(total);

// console.log("jetBrains mono");

// and reduce method in object how to use

// let shoping=[
//     {name:"banana",price:200},
//     {name:"biriyani",price:550},
//     {name:"anchor",price:700}
// ];

// let total=shoping.reduceRight((accumulator,currentval) => accumulator+currentval.price,600);

// console.log("your total is : ",total);

// //<<<<<----------------------------using reduce method in es6--------------------------------

// let addcost=(accumulator,currentval)=>accumulator+currentval.price;

// const add1=shoping.reduce(addcost,200);

// console.log(add1);

// JavaScript: Difference between sort(), filter(), map(), reduce() methods

// let num=[14,55,66,24,85,22];
// console.log(num);

// // sort

// let result1=num.sort();
// console.log(result1);

// // filter

// let result2=num.filter((val)=> val<50);
// console.log("result 2 : ",result2);

// //map

// let result3=num.map((val)=> val*20);
// console.log(result3);

// // reduce

// let result4=num.reduce((val,pre)=> val+pre)
// console.log(result4);

// // find

// let result5=num.find((val)=> val<50);
// console.log(result5);

// ============================================ function in depth

// let n = 1;/
// let n1 = 45;

//  function

// function add(){
//     let total=n+n1;
//     console.log(total);
// }
// add()

// using named to fnction<<<<<must use semicolon;

// const addNo = function add() {
//   let total = n + n1;
//   console.log(total);
// }

// addNo();

// anonymous function
// const add1=()=>{
//     let total=n+n1;
//     console.log(total);
// }
// add1();

// // usng es6 arrow function
// let add=()=> {
//     let total=n+n1;
//     console.log(total);
// }

// add();


// ---self invoking functions 

// ((num1,num2)=>{
//     let total=num1+num2;
//     console.log(total);

// })(n,n1);

// that function syntax

// (function name(){    
//     // statement      
//  })();

// // that function syntax in ES6 
//  (()=>{
//     // statement
//  })();


// using functionss ssssssss----

// function my(biriyani,kabsa,chicken){
//     return biriyani+kabsa+chicken;

// }

// let total=my(15,25);

// console.log(`Your total is :  ${total} $`);

// function ---arguments

// function myfunc(loan,...my){
//     let a=my.reduce((a,b)=> a+b );
//     return a-loan;


// }
// let myargu=myfunc(15,25,35,36,14);

// console.log(`your total is : Rs.${myargu}`);




// make application using defualt parameters ------

// function bill(electryCityBill=0,tax=5){
//     let total=electryCityBill+tax;
//     console.log(`your total bill is ${total}/-`);

        
// }
// let q=Number(prompt("Enter bill amount"));
// let total1=bill(q,10);



// appliction 2

// var q1=Number(prompt("Enter your electricity bill 1 : "));
// var q2=Number(prompt("Enter your electricity bill 2 : "));
// function adding(val1,val2,avgs){
//     let total=val1+val2;
//     let avg=total/avgs;
//     console.log(`your total is : ${total}/- 
// your tax is : ${avg} /-
//     `);
// }

// let finale=adding(q1,q2,2);

// <<<<<<<<<<<<<<<<<<<<gettter $$--setters method in javscript<<<<<// <<<<<<<today we learn error handling javscript

// let user={
//     first_name:"Aathif",
//     last_name:"Arafath",
//     get fullname(){
//         return `${user.first_name} ${user.last_name}`;

//     },
//     set fullname(val){
//         if(typeof val != "string"){
//             const err=new Error("it is not a string");
//             throw err;
//         }
//         if(val.length <= 3){
//             throw "name invalid";
//         }
//         let values=val.split(" ");
//         this.first_name = values[0];
//         this.last_name = values[1] ?? "";

//     },
// };

// <<< getter -- it is use to get data
// <<< setters -- it is use to set data

// try{
//     this is defensive programming
// user.fullname="arf athdi";
// }catch(ex){
//     alert(ex);
// }

// console.log(user.fullname);



// currency finder

// var msg =`<br>
// available convert money<br>
// 1.India to Srilanka <br>
// 2.USA to Srilanka <br>
// 3.UAE to Srilanka<br><br><br>

// `;

// document.write(msg);

// function india() {
//     let q1=Number(prompt("Enter your Srilanka Money : "));
//     let total=q1*4.2;
//     document.write(`Indian currency : ${total}/-`);
// }

// function USA(){
//     let q1=Number(prompt("Enter your Srilanka Money : "));
//     let total=q1*359.65;
//     document.write(`USA currency : ${total}/-`);
// }

// function UAE(){
//     let q1=Number(prompt("Enter your Srilanka Money : "));
//     let total=q1*97.91;
//     document.write(`UAE currency : ${total}/-`);
// }

// let q=prompt("Enter your way: ");

// if(q==1){
//     india();
// }
// else if(q==2){
//     USA();
// }else if(q==3){
//     UAE();
// }else{
//     alert("invalid way");

// }





















































