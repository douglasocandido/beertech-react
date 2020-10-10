import React from 'react';
import UsersColletcion from './Components/UsersCollection';
import Grid from '@material-ui/core/Grid';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './index.css';
import Header from './Components/Header';
//inicio - estilização Material-UI

//fim - estidlização Material-UI

function App() {
  return (
    <>
    <CssBaseline />
    <div className="App">
    <main>
    <Container maxWidth="sm">
    <Header />
    <Grid container spacing={2} justify="center">
    <UsersColletcion />
    </Grid>
    </Container>
    </main>
    </div>
    </>
    );
  }
  
  export default App;
  
  
  // Quando um componente é criado 1x
  // ----------------------------------
  
  // constructor()
  // static getDerivedStateFromProps()
  // UNSAFE_componentWillMount() (Depreciado)
  // render()
  // componentDidMount()
  
  // Toda vez que um componente é atualizado
  // ----------------------------------------
  
  // UNSAFE_componentWillUpdate() (Depreciado)
  // static getDerivedStateFromProps()
  // shouldComponentUpdate()
  // render()
  // getSnapshotBeforeUpdate()
  // componentDidUpdate()
  
  // Quando um componente é removido do DOM
  // componentWillUnmount()
  