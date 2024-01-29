let compBoxItems = document.querySelectorAll(".compBoxItem");
let compShowbox = document.querySelector(".compShowbox");
let textarea = document.querySelector("#textarea");

let createCompBox = document.querySelector(".createCompBox");
let submit = document.querySelector(".submit");
let exit = document.querySelector(".exit");
// console.log(compBoxItems);
let userSubmitInfo = document.querySelector(".userSubmitInfo");

let compShowItems = document.querySelectorAll(".compShowItem")

for (let i = 0; i< compBoxItems.length; i++) {
    compBoxItems[i].addEventListener("click", (e)=>{
        // console.log(compBoxItems[i].children[1].innerText);

        console.dir(compBoxItems[i])
        console.log("clicked");
        createCompBox.classList.remove("createCompBoxBefore");
        createCompBox.classList.add("createCompBoxAfter");

        submit.addEventListener("click", function(e) {

            let compBoxItem = compShowItems[0].cloneNode(true);
            compShowbox.append(compBoxItem);

            console.dir(compBoxItem);
            
            compBoxItem.children[0].children[1].children[1].innerText = compBoxItems[i].children[1].innerText;
            compBoxItem.children[0].children[0].children[1].innerText = "Vasu Choudhari";
            compBoxItem.children[0].children[2].children[1].innerText = "2346012";
            
            // console.dir(createCompBox);

            compBoxItem.children[1].children[0].innerText = createCompBox.children[1].children[1].value
            compBoxItem.children[1].children[1].remove();
            // console.log(createCompBox.children[1].children[1].value);

        
            createCompBox.classList.add("createCompBoxBefore");
            createCompBox.classList.remove("createCompBoxAfter");
        })
    });

}

exit.addEventListener("click", (e) =>{
    textarea.innerText = "";
    createCompBox.classList.add("createCompBoxBefore");
    createCompBox.classList.remove("createCompBoxAfter");
})



// for(let i= 0; i<compBoxItems.length; i++) {
//     compBoxItems[i].addEventListener("click", (e)=>{
//         console.log("clicked");
//     })
// }