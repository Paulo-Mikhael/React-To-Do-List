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

    function iniciaCronometro(tempo: Tempo): void{
        let hora = Number(tempo.hora);
        let minuto = Number(tempo.minuto);
        let segundo = Number(tempo.segundo);

        setTimeout(() => {
            if (segundo > 0){
                segundo -= 1;
            }
            else if (minuto > 0){
                segundo = 59;
                minuto -= 1;
            } else if (hora > 0){
                minuto = 59;
                hora -= 1;
            }

            const hms = {
                hora: String(hora).padStart(2, '0'),
                minuto: String(minuto).padStart(2, '0'),
                segundo: String(segundo).padStart(2, '0')
            }

            setTempo(hms);

            if (hora != 0 || minuto != 0 || segundo != 0){
                return iniciaCronometro(hms);
            }
        }, 1000)
    }

    return (
        <section className={style.alarmClock}>
            <form onSubmit={(evento) => {
                evento.preventDefault();
                iniciaCronometro(tempo);
            }}>
                <Relogio tempo={tempo}/>
                <Button type='submit'>
                    Começar
                </Button>
            </form>
        </section>
    )
}

export default Cronometro;