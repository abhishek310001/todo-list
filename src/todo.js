let todoArray = [];

const createTodo = (title,description,dueDate,priority,checkList) => {
    todoArray.push({title, description, dueDate, priority, checkList});
    return { 
        title, description, dueDate, priority, checkList
    };
}

export default createTodo;