import { useEffect, useState } from 'react';
import { ITarefa } from '../../types/tarefaArray';
import Button from '../Button';
import style from './Cronometro.module.scss';
import Relogio from './Relogio';
import { Tempo } from '../../types/tempo';

interface Props{
    selecionada: ITarefa | undefined,
}

const Cronometro = ({ selecionada }: Props) => {
    const [tempo, setTempo] = useState<Tempo>({ hora: "00", minuto: "00", segundo: "00" });

    useEffect(() => {
        if (selecionada?.tempo){
            const tempoSelecionada = selecionada.tempo;
            const tempoSelecionadaArray = tempoSelecionada.split(":");
            const hms = {
                hora: tempoSelecionadaArray[0],
                minuto: tempoSelecionadaArray[1],
                segundo: tempoSelecionadaArray[2]
            }

            setTempo(hms)
        }
    }, [selecionada]);

    return (
        <section className={style.alarmClock}>
            <form>
                <Relogio tempo={tempo}/>
                <Button type='submit'>
                    Começar
                </Button>
            </form>
        </section>
    )
}

export default Cronometro;