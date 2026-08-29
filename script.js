// Key used to store tasks in browser localStorage
const STORAGE_KEY = "taskflow_todos";

// Load saved tasks
let todos = loadTodos();

// Current filter
let currentFilter = "all";

// Get HTML elements
const form = document.getElementById("todoForm");
const input = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const emptyMessage = document.getElementById("emptyMessage");

const taskCount = document.getElementById("taskCount");
const remainingCount = document.getElementById("remainingCount");

const clearCompleted =
    document.getElementById("clearCompleted");

const filterButtons =
    document.querySelectorAll(".filter");


// ===============================
// LOAD DATA FROM LOCAL STORAGE
// ===============================

function loadTodos() {

    try {

        const savedTodos =
            localStorage.getItem(STORAGE_KEY);

        return savedTodos
            ? JSON.parse(savedTodos)
            : [];

    } catch (error) {

        return [];

    }
}


// ===============================
// SAVE DATA TO LOCAL STORAGE
// ===============================

function saveTodos() {

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(todos)
    );
}


// ===============================
// CREATE NEW TASK
// ===============================

function createTodo(text) {

    return {
        id:
            Date.now().toString() +
            Math.random().toString(16).slice(2),

        text: text.trim(),

        completed: false
    };
}


// ===============================
// GET FILTERED TASKS
// ===============================

function getFilteredTodos() {

    if (currentFilter === "active") {

        return todos.filter(
            todo => !todo.completed
        );
    }

    if (currentFilter === "completed") {

        return todos.filter(
            todo => todo.completed
        );
    }

    return todos;
}


// ===============================
// DISPLAY TASKS
// ===============================

function render() {

    // Clear old list
    todoList.innerHTML = "";

    const filteredTodos =
        getFilteredTodos();

    filteredTodos.forEach(todo => {

        // Create list item
        const li =
            document.createElement("li");

        li.className =
            "todo-item";

        if (todo.completed) {

            li.classList.add("completed");
        }

        li.dataset.id = todo.id;


        // Checkbox
        const checkbox =
            document.createElement("input");

        checkbox.type = "checkbox";

        checkbox.className =
            "todo-check";

        checkbox.checked =
            todo.completed;


        // Task text
        const text =
            document.createElement("span");

        text.className =
            "todo-text";

        text.textContent =
            todo.text;


        // Actions container
        const actions =
            document.createElement("div");

        actions.className =
            "actions";


        // Edit button
        const editButton =
            document.createElement("button");

        editButton.type = "button";

        editButton.className =
            "action-btn";

        editButton.textContent =
            "Edit";

        editButton.dataset.action =
            "edit";


        // Delete button
        const deleteButton =
            document.createElement("button");

        deleteButton.type = "button";

        deleteButton.className =
            "action-btn delete-btn";

        deleteButton.textContent =
            "Delete";

        deleteButton.dataset.action =
            "delete";


        // Add buttons
        actions.appendChild(editButton);
        actions.appendChild(deleteButton);


        // Add everything to list item
        li.appendChild(checkbox);
        li.appendChild(text);
        li.appendChild(actions);


        // Add list item to page
        todoList.appendChild(li);

    });


    updateSummary();

    updateEmptyMessage(
        filteredTodos.length
    );
}


// ===============================
// UPDATE TASK COUNTER
// ===============================

function updateSummary() {

    const total =
        todos.length;

    const remaining =
        todos.filter(
            todo => !todo.completed
        ).length;


    taskCount.textContent =
        `${total} ${total === 1 ? "task" : "tasks"}`;

    remainingCount.textContent =
        `${remaining} remaining`;
}


// ===============================
// EMPTY MESSAGE
// ===============================

function updateEmptyMessage(count) {

    if (count === 0) {

        emptyMessage.classList.remove(
            "hidden"
        );

    } else {

        emptyMessage.classList.add(
            "hidden"
        );
    }
}


// ===============================
// ADD TASK
// ===============================

form.addEventListener(
    "submit",
    function(event) {

        event.preventDefault();

        const text =
            input.value.trim();

        if (text === "") {
            return;
        }


        const newTodo =
            createTodo(text);


        // Add task
        todos.unshift(newTodo);


        // Save task
        saveTodos();


        // Display tasks
        render();


        // Clear input
        input.value = "";

        input.focus();
    }
);


// ===============================
// CHECKBOX - COMPLETE TASK
// ===============================

todoList.addEventListener(
    "change",
    function(event) {

        if (
            !event.target.classList.contains(
                "todo-check"
            )
        ) {
            return;
        }


        const listItem =
            event.target.closest(
                ".todo-item"
            );


        const id =
            listItem.dataset.id;


        const todo =
            todos.find(
                todo => todo.id === id
            );


        if (todo) {

            todo.completed =
                event.target.checked;

            saveTodos();

            render();
        }

    }
);


// ===============================
// EDIT AND DELETE
// ===============================

todoList.addEventListener(
    "click",
    function(event) {

        const button =
            event.target.closest("button");

        if (!button) {
            return;
        }


        const listItem =
            button.closest(".todo-item");


        const id =
            listItem.dataset.id;


        const todo =
            todos.find(
                todo => todo.id === id
            );


        if (!todo) {
            return;
        }


        // DELETE
        if (
            button.dataset.action === "delete"
        ) {

            todos =
                todos.filter(
                    todo => todo.id !== id
                );

            saveTodos();

            render();
        }


        // EDIT
        if (
            button.dataset.action === "edit"
        ) {

            startEditing(
                listItem,
                todo
            );
        }

    }
);


// ===============================
// EDIT TASK
// ===============================

function startEditing(item, todo) {

    const textElement =
        item.querySelector(
            ".todo-text"
        );

    const actions =
        item.querySelector(
            ".actions"
        );


    // Create input
    const editInput =
        document.createElement("input");

    editInput.className =
        "edit-input";

    editInput.type =
        "text";

    editInput.value =
        todo.text;


    // Save button
    const saveButton =
        document.createElement("button");

    saveButton.type = "button";

    saveButton.className =
        "action-btn";

    saveButton.textContent =
        "Save";


    // Cancel button
    const cancelButton =
        document.createElement("button");

    cancelButton.type = "button";

    cancelButton.className =
        "action-btn";

    cancelButton.textContent =
        "Cancel";


    // Replace text with input
    textElement.replaceWith(
        editInput
    );


    actions.innerHTML = "";

    actions.appendChild(
        saveButton
    );

    actions.appendChild(
        cancelButton
    );


    editInput.focus();

    editInput.select();


    // Save edited task
    saveButton.addEventListener(
        "click",
        function() {

            const newText =
                editInput.value.trim();


            if (newText === "") {
                return;
            }


            todo.text =
                newText;


            saveTodos();

            render();
        }
    );


    // Cancel editing
    cancelButton.addEventListener(
        "click",
        function() {

            render();
        }
    );


    // Enter = Save
    editInput.addEventListener(
        "keydown",
        function(event) {

            if (event.key === "Enter") {

                saveButton.click();
            }

            if (event.key === "Escape") {

                cancelButton.click();
            }

        }
    );
}


// ===============================
// FILTER TASKS
// ===============================

filterButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            function() {

                currentFilter =
                    button.dataset.filter;


                // Remove active class
                filterButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "active"
                        );

                    }
                );


                // Add active class
                button.classList.add(
                    "active"
                );


                render();
            }
        );

    }
);


// ===============================
// CLEAR COMPLETED TASKS
// ===============================

clearCompleted.addEventListener(
    "click",
    function() {

        todos =
            todos.filter(
                todo => !todo.completed
            );


        saveTodos();

        render();
    }
);


// ===============================
// INITIAL DISPLAY
// ===============================

render();
