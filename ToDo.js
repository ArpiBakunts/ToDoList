function addToDo() {
    const toDo = document.createElement("li");
    toDo.setAttribute("class", "remove");
    let toDoText = document.getElementById("data-input").value;
    if (toDoText !== "") {
        let text = document.createTextNode(toDoText);
        toDo.appendChild(text);
        document.getElementById("list").appendChild(toDo);

        let button = document.createElement("button");
        let closeButton = document.createTextNode("X");
        button.className = "remove";
        button.onclick = removeToDo();
        button.appendChild(closeButton);
        toDo.appendChild(button);

        document.getElementById("data-input").value = "";
    }
}


function removeToDo() {
    $(".remove").on("click", function(){
        $(this).closest("li").remove();
    });
}

// "use strict";
//
// function button() {
//     let toDoText = document.getElementById("data-input").value;
//     $(document).ready(function(){
//         $(".submit").click(function(){
//             $(".list").append(`<li>${toDoText}</li>`);
//         });
//     });
// }
