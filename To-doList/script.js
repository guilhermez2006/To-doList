class ListaDeTarefas {
    constructor() {
        this.lista = [];
        this.idAtual = 1;
    }

    adicionar(textoTarefa) {
        if (!textoTarefa.trim()) {
            alert("Digite uma tarefa válida!");
            return;
        }

        const novaTarefa = {
            id: this.idAtual++,
            texto: textoTarefa,
            feita: false
        };

        this.lista.push(novaTarefa);
        this.mostrarNaTela();
    }

    marcarComoFeita(id) {
        for (let i = 0; i < this.lista.length; i++) {
            if (this.lista[i].id === id) {
                this.lista[i].feita = true;
                break;
            }
        }
        this.mostrarNaTela();
    }

    apagar(id) {
        this.lista = this.lista.filter(function (tarefa) {
            return tarefa.id !== id;
        });
        this.mostrarNaTela();
    }

    mostrarNaTela() {
        const listaPendentes = document.getElementById("listaTarefas");
        const listaFeitas = document.getElementById("listaConcluidas");

        listaPendentes.innerHTML = "";
        listaFeitas.innerHTML = "";

        for (let i = 0; i < this.lista.length; i++) {
            const tarefa = this.lista[i];

            const item = document.createElement("li");
            const texto = document.createElement("span");
            texto.textContent = tarefa.texto;

            const botaoRemover = document.createElement("button");
            botaoRemover.textContent = "Remover";
            botaoRemover.className = "btn-remover";
            botaoRemover.onclick = () => this.apagar(tarefa.id);

            if (tarefa.feita) {
                // Tarefas concluídas NÃO ficam riscadas
                texto.style.textDecoration = "none"; // Garantir que não tenha risco
                texto.style.color = "#000"; // Cor normal para concluídas
                item.appendChild(texto);
                item.appendChild(botaoRemover);
                listaFeitas.appendChild(item);
            } else {
                // Tarefas pendentes FICAM riscadas
                texto.style.textDecoration = "line-through";
                texto.style.color = "#888";

                const botaoFeita = document.createElement("button");
                botaoFeita.textContent = "Concluir";
                botaoFeita.className = "btn-concluir";
                botaoFeita.style.marginLeft = "10px";
                botaoFeita.onclick = () => this.marcarComoFeita(tarefa.id);

                item.appendChild(texto);
                item.appendChild(botaoFeita);
                item.appendChild(botaoRemover);
                listaPendentes.appendChild(item);
            }
        }

        this.atualizarContagem();
    }

    atualizarContagem() {
        const quantasPendentes = this.lista.filter(function (t) {
            return !t.feita;
        }).length;

        const quantasFeitas = this.lista.filter(function (t) {
            return t.feita;
        }).length;

        const total = this.lista.length;

        const contadores = document.querySelectorAll(".stat-value");
        contadores[0].textContent = quantasPendentes;
        contadores[1].textContent = quantasFeitas;
        contadores[2].textContent = total;
    }
}

const tarefas = new ListaDeTarefas();

document.getElementById("btnAdicionar").addEventListener("click", function () {
    const campo = document.getElementById("inputTarefa");
    tarefas.adicionar(campo.value);
    campo.value = "";
});
