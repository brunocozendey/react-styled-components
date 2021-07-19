import React from 'react';
import alimentacao from '../assets/images/alimentacao.svg'
import outros from '../assets/images/outros.svg'
import saude from '../assets/images/saude.svg'
import transporte from '../assets/images/transporte.svg'
import utilidades from '../assets/images/utilidades.svg'
import { IconeThema } from '../Components/UI'

export default (type) => {
    const Images = {
        Restaurante: <IconeThema src={alimentacao} alt="Restaurante" />,
        Saude: <IconeThema src={saude} alt="Saúde" />,
        Transporte: <IconeThema src={transporte} alt="Transporte" />,
        Utilidades: <IconeThema src={utilidades} alt="Utilidades" />,
        default: <IconeThema src={outros} alt="Outro" />,
    };
    return Images[type] || Images.default;

};