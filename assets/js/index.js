let tasks = []
let id_generator = 1 // variable global
let eliminar = (id) => {
    tasks = tasks.filter(t => t.id != id)
    generatabla()
}
let actualizar = (checkbox, task_id) => {
    let index = tasks.findIndex(t => t.id == task_id)
    tasks[index].status = checkbox.checked
    generatabla()
    console.log(index, tasks[index])
}
let generatabla = () => {
    let table = document.querySelector("#hw_table")
    let total_p = document.querySelector("#total")
    let completed_p = document.querySelector("#completed_total")
    table.innerHTML = `<tr>
    <th>ID</th>
    <th>Tarea</th>
    <th> </th>
    <th> </th>
    </tr>`
    let total = 0
    let realizadas = 0
    for (const task of tasks) {
        table.innerHTML += `
        <tr>
        <td>${task.id}</td>
        <td>${task.name}</td>
        <td><input type="checkbox" ${task.status?'checked="true"':''} onclick='actualizar(this, ${task.id})'></td>
        <td><i onclick="eliminar(${task.id})" class="fa-solid fa-trash-can" id="deletehm"></i></td>
    </tr>`
        if (task.status) {
            realizadas+=1
        }
        total+=1
    }
    total_p.innerHTML = `Total: ${total}`
    completed_p.innerHTML = `Realizadas: ${realizadas}`
}
let agregarhw = () => {
    const hmagregada = document.querySelector("#hw") // voy a verificar cuál es el valor
    if (
        hmagregada.value == "" //detecto si existe o no valor en el imput
    ) {
        alert("Debe ingresar una tarea")
        return //si no detecto valor, sigo avanzando en el código
    }
    tasks.push({
        name: hmagregada.value,
        id: id_generator,
        status: false
    })
    generatabla()
    id_generator += 1
    hmagregada.value = ""
}

generatabla()