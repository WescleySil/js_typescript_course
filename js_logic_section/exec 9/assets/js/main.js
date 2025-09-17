function escopoLocal() {
    const inputTask = document.querySelector('.input-task');
    const buttonTask = document.querySelector('.add-task');
    const tasks = document.querySelector('.tasks');

    buttonTask.addEventListener('click', () => {
        if(!inputTask.value) return;
        createTask(inputTask.value);
    })

    inputTask.addEventListener('keypress', (e) => {
        if(e.keyCode === 13) {
            if(!inputTask.value) return;
            createTask(inputTask.value);
        }
    })

    function createLi (){
        const li = document.createElement('li');
        return li;
    }

    function clearInput(){
        inputTask.value = '';
        inputTask.focus();
    }

    function createDeleteButton(li){
        li.innerText += ' ';
        const buttonDelete = document.createElement('button');
        buttonDelete.innerText = 'Apagar';
        buttonDelete.setAttribute('class', 'delete-button');
        li.appendChild(buttonDelete);
    }

    function createTask(textInput) {
        const li = createLi();
        li.innerText = textInput;
        tasks.appendChild(li);
        createDeleteButton(li);
        clearInput();
        saveTasks();
    }

    function saveTasks(){
        const liTasks = tasks.querySelectorAll('li');
        const listTasks = [];
        for (let task of liTasks){
            let taskText = task.innerText;
            taskText = taskText.replace('Apagar', '').trim();
            listTasks.push(taskText);
        }

        const taskJson = JSON.stringify(listTasks);
        localStorage.setItem('tasks', taskJson);
    }

    function loadTasks() {
        const tasks = localStorage.getItem('tasks');
        const listTasks = JSON.parse(tasks);
        for (let task of listTasks){
            createTask(task);
        }
    }

    document.addEventListener('click', (e) => {
        const el = e.target;
        if(el.classList.contains('delete-button')){
            el.parentElement.remove();        
            saveTasks();
        }
    });

    loadTasks();    
}
escopoLocal();