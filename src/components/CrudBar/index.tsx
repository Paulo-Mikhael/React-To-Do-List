import { FormHTMLAttributes, useState } from 'react';
import Button from '../Button';
import style from './CrudBar.module.scss';
import { ITarefa } from '../../types/tarefaArray';
import { v4 as uuidV4 } from 'uuid';

export default function CrudBar({ setTarefas }: { setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>> }){
    const [state, setAction] = useState({
        nome: "",
        tempo: "00:00:00",
        feito: false
    });
    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        setTarefas(tarefasAntigas => [...tarefasAntigas, { ...state, selecionado: false, id: uuidV4() }]);
    }
    return (
        <section className={style.barContainer}>
            <form onSubmit={adicionarTarefa}>
                <Button type='submit'>Adicionar</Button>
                <input
                    type="text" 
                    name="crud-input" 
                    id="crud-input" 
                    value={state.nome}
                    required
                    maxLength={20}
                    onChange={evento => {
                        setAction({ ...state, nome: evento.target.value });
                    }}
                />
                <input
                    type="time" 
                    name="timeInput"
                    id="timeInput"
                    step="1"
                    min="00:00:01"
                    max="24:00:00"
                    value={state.tempo}
                    onChange={evento => {
                        setAction({ ...state, tempo: evento.target.value });
                    }}
                />
                <input 
                    type="checkbox" 
                    name="feito" 
                    id="feito"
                    checked={state.feito}
                    onChange={evento => {
                        setAction({ ...state, feito: evento.target.checked });
                    }}
                />
            </form>
        </section>
    )
}