let main_js = document.querySelector(".main");
let inpt = document.querySelector(".input_1");
let btn = document.querySelector(".button_1");


btn.addEventListener('click', myFunction);

let clear_btn = document.createElement("p");
clear_btn.setAttribute("class","clr_btn");



function myFunction() {


    if(inpt.value == ""){
        alert("Enter the task");
    }else{
        let subdiv = document.createElement("div")
            subdiv.setAttribute("class","subdiv")
        let todo_task = document.createElement("ul");
            todo_task.setAttribute("class","todo")
        let li_todo = document.createElement("p");
            li_todo.setAttribute("class","content");
            li_todo.innerText = (inpt.value);
        let del_btn = document.createElement("button");
            del_btn.innerText = "X"

                li_todo.appendChild(del_btn);
                todo_task.appendChild(li_todo);
                subdiv.appendChild(todo_task);
                main_js.appendChild(subdiv);

            del_btn.addEventListener('click',function (){
                clicking(del_btn)
            } );

       

            inpt.value = "";

                clear_btn.innerText = "Clear";
                todo_task.appendChild(clear_btn)
                clear_btn.addEventListener('click', clearing);
               
            function clearing() {
                todo_task.parentElement.remove()
            }
    }

}


function clicking(x) {
    x.parentElement.remove()
}

