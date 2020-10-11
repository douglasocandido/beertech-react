import React from 'react';
import UsersCollection from './Components/UsersCollection';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import './index.css';
import Header from './Components/Header/';
import Footer from './Components/Footer/';

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <main className="main-wrapper">
        <Container maxWidth='xl'>
          <Header />
          <UsersCollection />
        </Container>
      </main>
      <Footer/>
    </div>
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
  