import React, { Children } from 'react';
import style from './Button.module.scss';

export default function Button(
    { children, type }: { children: React.ReactNode, type?: "button" | "submit" | "reset" | undefined  }
){
    return(
        <button type={type} className={style.button}>
            {children}
        </button>
    )
}