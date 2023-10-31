let main_js = document.querySelector(".main");
let inpt = document.querySelector(".input_1");
let btn = document.querySelector(".button_1");

btn.addEventListener('click', myFunction);

let clear_btn = document.createElement("p");
clear_btn.setAttribute("class","clr_btn");

let edited = 0;

function myFunction() {

    if (inpt.value == "") {
        alert("Enter the task");
    } 
    else 
    {
        if (!edited){
            let subdiv = document.createElement("div");
                subdiv.setAttribute("class", "subdiv");
            let todo_task = document.createElement("ul");
                todo_task.setAttribute("class", "todo")
            let li_todo = document.createElement("p");
                li_todo.setAttribute("class", "content");
                li_todo.innerText = (inpt.value);
            let btndiv = document.createElement("div");
                btndiv.setAttribute("class", "btndiv");
            let edit_btn = document.createElement("h4");
                edit_btn.innerHTML = '<i class="fa-solid fa-pen-to-square"></i>';
            let del_btn = document.createElement("h4");
                del_btn.innerHTML = '<i class="fa-solid fa-square-xmark"></i>';

            btndiv.append(edit_btn,del_btn)
            todo_task.append(li_todo,btndiv);
            subdiv.appendChild(todo_task);
            main_js.appendChild(subdiv);

            del_btn.addEventListener('click', function (){
                del_btn.parentElement.parentElement.remove()
            });
            edit_btn.addEventListener('click', function (){
                edited = li_todo
                inpt.value = li_todo.innerHTML; 
            });

            inpt.value = "";

            clear_btn.innerText = "Clear";
            subdiv.appendChild(clear_btn)
            clear_btn.addEventListener('click', clearing);

            function clearing() 
            {
                todo_task.parentElement.remove();
                inpt.value = ""
            }
        }
        else {
            edited.innerHTML = inpt.value;
            inpt.value = "";
            edited = 0;
        }

    }

}
