// Trabalhando com array - criando um array vazio:
let data = [];

// Função de renderização na tela:
function renderTodo() {

    // Limpando o que ja existia:
    document.querySelector('.todo').innerHTML = "";
    
    // Percorrendo um array com foreach:
    data.forEach(task => {

        let li = document.createElement('li');

        li.innerHTML = `
    <input type="checkbox" id="task-${task.id}">
    <label for="task-${task.id}">${task.title}</label>
    <button class="button">x</button>
    `;
        // Manipulando classe no CSS:
        li.querySelector('input').addEventListener("change", e => {

            if (e.target.checked) {
                li.classList.add("complete");
            } else {
                li.classList.remove("complete");
            }
        
        });

        // Botão de excluir a tarefa:
        li.querySelector('button').addEventListener('click', e => {

            // Convertendo em string com a função split:
            let button = e.target;
            let li = button.parentNode;
            let input = li.querySelector('input');
            let id = input.id;
            let idArray = id.split('-');
            let todoId = idArray[1];
            let title = li.querySelector('label').innerText;

            // Utilizando janelas de confirmação com confirm:
            if (confirm(`Deseja excluir a tarefa ${title}?!`)) {

            // Filtrando elementos em um array com array filter:
            data = data.filter(task => {
                return (task.id !== parseInt(todoId));
            });

                renderTodo();
                
            }

        });

        document.querySelector('.todo').append(li);
    });

}
// Manipulando eventos do teclado:
document.querySelector('#new-task').addEventListener('keyup', e => {

    if (e.key === 'Enter') {

        // Adicionando elementos em um array com push:
        data.push({
            id: data.length+1,
            title: e.target.value
        });

        e.target.value = "";

        renderTodo();
    }
});

renderTodo();