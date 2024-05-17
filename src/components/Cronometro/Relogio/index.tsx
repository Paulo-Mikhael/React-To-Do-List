import { Tempo } from '../../../types/tempo';
import style from './Relogio.module.scss';

interface Props{
    tempo: Tempo,
}

export default function Relogio({ tempo }: Props){
    return (
        <span className={style.container}>
            <div>
                {tempo.hora}
            </div>
            <p>
                :
            </p>
            <div>
                {tempo.minuto}
            </div>
            <p>
                :
            </p>
            <div>
                {tempo.segundo}
            </div>
        </span>
    )
}