let btn = document.getElementById("btn");

let input = document.getElementById("input");

let output = document.getElementById("output");

let ul = document.getElementById("ul");

let noneImg = document.querySelector(".none-img img");


document.addEventListener("DOMContentLoaded", () => {
    // localStorage fetch,draw ui.
    const foodItems = [...JSON.parse(localStorage.getItem("foods"))];

    foodItems.forEach(item => {
        const li = document.createElement("li");
        li.className = "food";
        li.textContent = item.foodItem;
        ul.append(li);
        const removing = document.createElement('div');
        removing.textContent = "Remove";
        removing.className = "remove";
        li.append(removing);

        removing.setAttribute("onclick", "removeitem(event)");

        
        delimg()

    });

    
});


function delimg() {
    if (ul.children.length === 0) {
        noneImg.hidden = false;
    } else {
        noneImg.hidden = true;

    }
}


btn.addEventListener("click", () => {
    // output.innerHTML += `<li class="food">${input.value.toUpperCase()}</li>`;----------and also use this     

    if (input.value.length === 0) {
        alert("You must Hit a word");

    } else {
        const li = document.createElement("li");
        li.className = "food";
        li.textContent = input.value;
        ul.append(li);
        const removing = document.createElement('div');
        removing.textContent = "Remove";
        removing.className = "remove";
        li.append(removing);

        removing.setAttribute("onclick", "removeitem(event)");

       


        delimg()
        localStorage.setItem(
            "foods", JSON.stringify([
                ...JSON.parse(localStorage.getItem('foods') || '[]'), {
                    foodItem: input.value
                },
            ]));
        input.value = null;
    }

});


input.addEventListener("keydown", (e) => {
    // output.innerHTML += `<li class="food">${input.value.toUpperCase()}</li>`;----------and also use this     
    if (e.key === 'Enter') {
        const li = document.createElement("li");
        li.className = "food";
        li.textContent = input.value;


        if (input.value.length === 0) {
            alert("You must Hit a word");

        } else {
            ul.append(li);
            const removing = document.createElement('div');
            removing.textContent = "Remove";
            removing.className = "remove";
            li.append(removing);
            removing.setAttribute("onclick", "removeitem(event)");
            delimg();

            localStorage.setItem(
                "foods", JSON.stringify([
                    ...JSON.parse(localStorage.getItem('foods') || '[]'), {
                        foodItem: input.value
                    },
                ]));
        }
        input.value = null;

    }
});

function removeitem(event) {    delimg()
    let delBtn = event.target.parentNode;

    delBtn.remove()

let storageitem=[...JSON.parse(localStorage.getItem('foods'))];


storageitem.forEach((item)=>{
    
   if (item.foodItem === delBtn.innerText) {
    localStorage.clear();
   }
});

// localStorage.setItem('foods',JSON.stringify(storageitem));

}


var allLi = document.querySelectorAll(".food");

var clrAllBtn = document.querySelector(".button2")




clrAllBtn.addEventListener('click', () => {
    allLi.remove;
});


let food = document.querySelector('.food');

