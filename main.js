var btnAdicionarTarefa = document.querySelector('.adicionar__botao');
var btnMostrarMenu = document.querySelector('.mostrar__menu');
var formAdicionarTarefa = document.querySelector('.formulario__tarefas');
var textArea = document.querySelector('.app__form-textarea');
var listaTarefas = document.querySelector('.lista__tarefas');

/*Essa função vai mostrar o formulario quando vc clicar no '+'*/
btnMostrarMenu.addEventListener('click', () =>{
    formAdicionarTarefa.classList.toggle('hidden');
});

/*Função que coloca a tarefa na lista de itens*/
function adicionarTarefa(tarefa){
    var li = document.createElement('li');
    li.classList.add('lista__tarefas__item');

    var paragrafo = document.createElement('p');
    paragrafo.textContent = tarefa.descricao;
    paragrafo.classList.add('lista__tarefas__item');

    li.appendChild(paragrafo);

    return li;
};

/*Lista de itens - JSON*/
var tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];

tarefas.forEach(tarefa => {
    var elementoTarefa = adicionarTarefa(tarefa);
    listaTarefas.appendChild(elementoTarefa);
});


/*Botão que adiciona a tarefa*/
btnAdicionarTarefa.addEventListener('click', () => {
    var tarefa = {
        descricao: textArea.value
    }
    tarefas.push(tarefa);

    var elementoTarefa = adicionarTarefa(tarefa);
    listaTarefas.appendChild(elementoTarefa);
    localStorage.setItem('tarefas', JSON.stringify(tarefas));
    textArea.value = '';
    
});

