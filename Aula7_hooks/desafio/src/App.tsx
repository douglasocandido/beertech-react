import React, { useEffect, useState } from 'react';
import OwnerItem from './components/OwnerItem';
import AnimalItem from './components/AnimalItem';
import ListContainer from './components/ListContainer';

import IOwner from "./apifake/Interfaces/IOwner";
import IAnimal from './apifake/Interfaces/IAnimal';
import IOwnerItemProps from './interfaces/IOwnerItemProps'
import IAnimalItemProps from './interfaces/IAnimalItemProps'

import Animals from './apifake/Animals';
import Owners from './apifake/Owners';

import "./style.css";

const animals: Animals = new Animals();
const owners: Owners = new Owners();

function App() {
  const [ownersList, setOwners] = useState<IOwnerItemProps[]>([]);
  const [selectedOwnerId, setSelectedOwnerId] = useState(1)
  const [ownerAnimals, setOwnerAnimals] = useState<IAnimalItemProps[]>([])
  
  useEffect(() => {
    owners.getAll().then((ownersList:IOwner[]) => {
      setOwners([...ownersList]);
    });
  },[]);

  useEffect(() => {
    animals.getByOwnerId(Number(selectedOwnerId)).then((animalsList: IAnimal[]) => {
      setOwnerAnimals([...animalsList])
    });
  }, [selectedOwnerId]);

  const handleSelectOnChange = (ownerId: string) => {
    setSelectedOwnerId(Number(ownerId))
  }

  const handleButtonOnClick = () => {
    renderOwnersReport(true)
  }
  
  const renderOwnersReport = (ordered : boolean) => {

    return (
      <tbody>
        {ownersList.map((owner : IOwnerItemProps) => 
          <tr key={owner.id}>
            <td>{owner.name}</td>
            <td>0</td>
          </tr>
        )}
      </tbody>
    )
  }

  return (
    <div className="App">
      <ListContainer elementId='owners' label='Donos'>
        <select id="owners" onChange={changeEvent => handleSelectOnChange(changeEvent.target.value)}>
          {ownersList.map((owner : IOwnerItemProps) => <OwnerItem key={owner.id} name={owner.name} id={owner.id} />)}
        </select>
      </ListContainer>

      <ListContainer elementId='animals' label='Animais'>
        <select id="animals">
          {ownerAnimals.map((animal : IAnimalItemProps) => <AnimalItem key={animal.id} name={animal.name}/>)}
        </select>
      </ListContainer>

      <section id="report">
        <button onClick={() => handleButtonOnClick()}>Ordenar donos com mais animais</button>
        <table id="reportList">
          <thead>
            <tr>
              <th>Dono</th>
              <th>Quantidade</th>
            </tr>
          </thead>
          {renderOwnersReport(false)}
        </table>
      </section>
    </div>
  );
}

export default App;
