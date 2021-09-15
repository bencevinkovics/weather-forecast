import react from 'react';
import sunny from './weatherIcons/sunny.png'
import BoxRight from './components/BoxRight';
import BoxLeft from './components/BoxLeft';
import Container from './components/Container';
import './App.css';

function App() {
  return (
    <div className='main'>
      <div className='flex'>
        <Container>
          <div className='searchBar'></div>
          <BoxLeft id='mainBox'>
            <div>BUDAPEST</div>
            <img src={sunny} className='mainImg' />
          </BoxLeft>
          <BoxLeft />
        </Container>
      </div>
      <div className='flex'>
        <Container>
          <BoxRight />
          <BoxRight />
          <BoxRight />
          <BoxRight />
          <BoxRight />
        </Container>
      </div>
    </div>
  )
}

export default App;
