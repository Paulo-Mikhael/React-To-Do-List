import { ITarefa } from '../../types/tarefaArray';
import style from './Tarefas.module.scss';

interface Props{
    tarefaArray: ITarefa[],
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void 
}

export default function Tarefas({ tarefaArray, selecionaTarefa }: Props){
    return(
        <section className={style.tasksContainer}>
            {tarefaArray.map(item => (
                <div 
                    className={`${style.task} ${item.selecionado === true ? style.selecionado : ''}`} 
                    onClick = {() => {

                        const nome = item.nome;
                        const tempo = item.tempo;
                        const feito = item.feito;
                        const selecionado = item.selecionado;
                        const id = item.id;

                        selecionaTarefa(
                            {
                                nome,
                                tempo,
                                feito,
                                selecionado,
                                id
                            }
                        );
                    }}
                >
                    <h2>
                        {item.nome}
                    </h2>
                    <h3>
                        {item.tempo}
                    </h3>
                    <input 
                        type="checkbox" 
                        name="feito" 
                        id="feito"
                        checked={item.feito}
                    />
                </div>
            ))}
        </section>
    )
}