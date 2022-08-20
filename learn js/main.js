//window objects in java script

//--------location object


// setInterval(()=>{
// 	// location.assign("https://www.google.com");


// },5000)

// window.close();


// history object 

// history.back();
// history.forward();
// history.go();


// navigator object

// console.log(navigator);

// console.log(navigator.platform);

// Explorinng dom

// console.log(document.domain)  

// Exploring DoM object in javascript


// var myDoc=document;

// console.dir(myDoc.body.children[1].children[0].innerText='My Name Is => ARF');


// console.log(window.find("Iam"));



// ------------async  and ------------------defer 




//   document.getElementById

// let heading1=document.getElementById("heading");

// heading1.innerText="Apple";


// console.log(heading1);






// ----------------------document.getElemtsByClassName()-----------------------------------




// const foods = output.getElementsByClassName("food");


// let allfoods =[].map.call(foods,(foods)=> foods.textContent);

// console.log(allfoods);





// ------------------------document.querySelector-------------------------------------------------



// const allselect = document.querySelector("header nav span");


// console.log(allselect.innerText);



// ------------------------Creating an html element in javscript ---------------------------------------









// const div=document.createElement("div");
// const text='updated';
// div.append(text);


// // -----------------aplaying div class name -------in javecript-----


// div.className="Mydiv";

// console.log(div);




// --------------inserting Element in HTML With js insert HTML method -----------------------------------------

// output.insertAdjacentHTML('afterbegin','<li class="food">aftebegin</li>')

// output.insertAdjacentHTML('beforeend','<li class="food">bfore end </li>')

// output.insertAdjacentHTML('beforebegin','<li class="food">before begin</li>')

// output.insertAdjacentHTML('afterend','<li class="food">after end</li>')



// // -------------iserting Element in HTML With js insert Text  method----------------------------------------


// const li2=document.createElement("li");

// li2.innerText="food";

// li2.className="food";


// output.insertAdjacentElement('beforeend',li2);



// function alertFunction(msg){

    
// const div=document.createElement("div");
// const text=document.createTextNode(msg);


// div.className="Saved-msg";
// div.append(text);
// console.log(div);

// main.prepend(div)



// }

// alertFunction("Updated....")

// console.time("normal");

// for(let i=0; i<=10000; i++){
//     const li= document.createElement("li");
//     li.textContent=`foods : ${i}`
//     li.className="food" 
//     output.append(li);
// }
// console.timeEnd("normal");


// console.time("fast");
// const fragment=document.createDocumentFragment();


// for(let i=0; i<=10000; i++){
//     const li= document.createElement("li");
//     li.textContent=`foods : ${i}`
//     li.className="food" 
//     fragment.append(li);
// }

// output.append(fragment)


// console.timeEnd("fast");

// -----------------------chalenge in javascript------------------------------------


// const arr=["chi biryani " , "Fish biriyani ", "prwn biriyani","mutton biriyani"];

// for(i of arr)
// {
//     const frag = document.createDocumentFragment();

// let li = document.createElement("li");

// li.textContent=i;
// li.className="food";

// frag.append(li);

// output.append(frag);



// }


// arr.forEach((food)=>{

//     const frag = document.createDocumentFragment();

//     let li = document.createElement("li");
    
//     li.textContent= food;
//     li.className="food";
    
//     frag.append(li);
    
//     output.append(frag);
    
    

// });



// --------------------------replace method in javacscript -------------------------------------------





// var changingEl = document.querySelector("li:first-child")


    
//     const arf2 =document.createElement("li");
//         arf2.textContent="arf Is king ";
//             arf2.className="food";
//                 changingEl.replaceWith(arf2);
//                     console.log(arf2);




// -------------------------cloaning method in javacscript -------------------------




// console.log(ul);

// let cloning=ul.cloneNode(true);

// ul.append(cloning);


// -----------------------------form data in javscript ===================================***************



`
    passing form DATA
`


// let form = document.forms.feedback;
// let formbtn = document.querySelector('button');






// const submit = (event) => {
//   event.preventDefault();


//   console.log([...new FormData(form)]);


// };


// const formdata = (e) => {

//   let fData = e.formData;

//   fData.append('api-key', 'My Name is Arf');

//   console.log([...fData.entries()]);
//   console.log([...fData.values()]);
//   console.log(fData.get('email'));
//   console.log(fData.getAll('type'));
//   console.log(fData.has('date')); //Answer is False   -0-- *****//-----which is mean irukka or illiya
//   console.log([...fData.keys()]);
//   fData.set('gender', 'Male');
//   console.log([...fData]);
//   fData.delete('gender');
//   console.log([...fData]);





// };



// form.addEventListener('formdata', formdata);


// form.addEventListener('submit', submit);



// -----formatting data with json and many ways ----------------------------------------------------------------------------------------

// const data = [...formData.entries()];
// let mapData = data.map(([key, value]) => 
// `${ encodeURIComponent (key)} : ${ encodeURIComponent (value)}`).join("&");

// console.log(mapData);


// // ------------------you can also use this method but this method is old-........
// `
//   WHICH is best method you learn all
// `  

// let datastring = new URLSearchParams(formData).toString();

// console.log(datastring);


// `
//     -----------send data to backend using json method - - -2---------------------
// `

// const jsondata=JSON.stringify(Object.fromEntries(formData));

// console.log(jsondata);










































