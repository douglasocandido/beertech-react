import React from 'react';
import IOwnerItemProps from '../interfaces/IOwnerItemProps'

export default function OwnerItem(props: IOwnerItemProps) {
    return (
        <option value={props.id}>{props.name}</option>
    );
}