import React from 'react';

export interface IListContainerProps {
    elementId: string;
    label: string;
    children: React.ReactNode;
}

export default function ListContainer(props: IListContainerProps) {
    return (
        <section id={props.elementId+"-section"}>
            <label htmlFor={props.elementId}>{props.label}:</label>
            {props.children}
        </section>
    );
}