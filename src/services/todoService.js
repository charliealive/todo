const baseUrl = `https://localhost:44371/api/Todo`;
try{
    fetch(baseUrl);
}
catch(error){
    console.error(error);
}

export const loadTodo = () => {
    return fetch(baseUrl,{mode:'cors',method:"GET",headers: { "Content-Type": "application/json" }}).then((res) => res.json()).catch((e) => console.log(e));
}

export const getTodo = (id) => {
    return fetch(`${baseUrl}/${id}`).then((res) => res.json());
}

export const createTodo = (todo) => {
    return fetch(baseUrl,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            title: todo.title,
            completed: todo.completed
        }),
        
    }).then((res) => res.json());
};

export const updateTodo = (todo) =>{
    return fetch(`${baseUrl}/${todo.id}`, {
        method:"PUT",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            id: todo.id,
            title: todo.title,
            completed: todo.completed
        }),
        
    }).then((res) => res.json());
};

export const deleteTodo = (id) => {
    return fetch(`${baseUrl}/${id}`,{
        method: "DELETE",
    }).then(res => res.json());
        
}