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
        
        return confirm("Deseja cadastrar outra tarefa?");
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

// Código principal
const minhaLista = new ListaDeTarefas();
let continuar = true;

while (continuar) {
    continuar = minhaLista.adicionarTarefa();
}

minhaLista.listarTarefas();