import React from 'react';
import IAnimalItemProps from '../interfaces/IAnimalItemProps'

export default function AnimalItem(props: IAnimalItemProps) {
    return (
        <option>{props.name}</option>
    );
}