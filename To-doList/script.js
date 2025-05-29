class ListaDeTarefas {
    constructor() {
        this.tarefas = [];
        this.contadorId = 1;
    }

    adicionarTarefa() {
        let inTarefas = prompt("Digite uma tarefa para adicionar:");

        if (inTarefas === "" || inTarefas === null) {
            alert("[ERRO] Digite uma tarefa válida!");
            return false;
        }

        const novaTarefa = {
            id: this.contadorId,
            inTarefas: inTarefas
        };
        this.tarefas.push(novaTarefa);
        this.contadorId += 1;
        alert("Tarefa adicionada!");
    }

    listarTarefas() {
        if (this.tarefas.length === 0) {
            alert("[ERRO] Nenhuma tarefa cadastrada!");
        } else {
            let lista = "TAREFAS:\n";
            for (let contador = 0; contador < this.tarefas.length; contador++) {
                lista += `${this.tarefas[contador].id}: ${this.tarefas[contador].inTarefas}\n`;
            }
            alert(lista);
        }
    }
}

const minhaLista = new ListaDeTarefas();
let continuar = true;

while (continuar) {
    let opcao = prompt(`To-Do List
        1- Adicionar Tarefas
        2- Listar Tarefas
        3- Encerrar Programa`)

    switch (opcao) {
        case "1":
            minhaLista.adicionarTarefa()
            break
        case "2":
            minhaLista.listarTarefas()
            break;
        case "3":
            continuar = false; // usuário escolheu sair
            break;
        default:
            alert("Opção inválida!");
    }
}

// FUNÇÕES PRA ADICIONAR EM BREVE:
//removerTarefa(id)
//editarTarefa(id)
//concluirTarefa(id)
//limparTarefas()
