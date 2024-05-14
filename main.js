var btnAdicionarTarefa = document.querySelector('.adicionar__botao');
var btnMostrarMenu = document.querySelector('.mostrar__menu');
var formAdicionarTarefa = document.querySelector('.formulario__tarefas');
var textArea = document.querySelector('app__form-textarea');


/*Essa função vai mostrar o formulario quando vc clicar no '+'*/
btnMostrarMenu.addEventListener('click', () =>{
    formAdicionarTarefa.classList.toggle('hidden');
})

/*Botão que adiciona a tarefa*/
formAdicionarTarefa.addEventListener('submit', (evento) => {
    evento.preventDefault();
    var tarefa = {
        descricao: textArea.value
    }
    tarefas.push(tarefa);
});

/*Evento de submit*/

/*Função que coloca a tarefa na lista de itens*/
function adicionarTarefa(tarefa){
    var li = document.querySelector('li');
    li.classList.add('.lista__tarefas__item');

    var paragrafo = document.createElement('p');
    paragrafo.textContent = tarefa.descricao;
    paragrafo.classLista.add('.lista__tarefas__item');

    li.append(paragrafo);

    return li;
}
/*Lista de itens - JSON*/
var tarefas = JSON.parse(localStorage.getItem('tarefas')) || [];



