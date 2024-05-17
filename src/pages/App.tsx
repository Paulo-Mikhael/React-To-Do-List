import React, { useState } from 'react';
import './App.module.scss';
import Menu from '../components/Menu';
import Tarefas from '../components/Tarefas';
import CrudBar from '../components/CrudBar';
import { ITarefa } from '../types/tarefaArray';
import Cronometro from '../components/Cronometro';

function App() {
  const [tarefaVar, setTarefa] = useState<ITarefa[]>([
    /*{
      nome: "Estudar TypeScript",
      tempo: "02:00",
      feito: false,
      selecionado: false,
      id: "1"
    },
    {
      nome: "Fazer exercícios de React",
      tempo: "01:30",
      feito: false,
      selecionado: false,
      id: "2"
    },
    {
      nome: "Ler documentação do React",
      tempo: "01:00",
      feito: true,
      selecionado: false,
      id: "3"
    },
    {
      nome: "Desenvolver projeto pessoal",
      tempo: "03:00",
      feito: false,
      selecionado: false,
      id: "4"
    }*/
  ]);
  const [tarefaSeleciona, setSelecionado] = useState<ITarefa>();
  function selecionaTarefa(tarefaSelecionada: ITarefa){
    setSelecionado(tarefaSelecionada);
    setTarefa(tarefasAntigas => tarefasAntigas.map(tarefa => ({
      ...tarefa, selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })));
  }
  return (
    <div className="App">
      <main>
        <Menu/>
        <Tarefas tarefaArray={tarefaVar} selecionaTarefa={selecionaTarefa}/>
        <CrudBar setTarefas={setTarefa}/>
        <Cronometro selecionada={tarefaSeleciona}/>
      </main>
    </div>
  );
}

export default App;
