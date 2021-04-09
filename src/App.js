import './App.css';
import SideMenu from './SideMenu';
import ProgramList from './ProgramList'
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <>

      <Container>
        <div>
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
          <i class="fas fa-bars menu-test"></i>
          <h1 class="channel-title">SVT 1</h1>
          <SideMenu />
          <ProgramList />
        </div>

      </Container>

    </>
  )
}

export default App;
