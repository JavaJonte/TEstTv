import './App.css';
import SideMenu from './SideMenu';
import { Container, Row, Col } from 'react-bootstrap';


function App() {
  return (
    <Container>
      <div>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" />
        <i class="fas fa-bars menu-test"></i>
      </div>
      
      <Col>
        SVT 1
</Col>
      <ul class="program-list">
        <li class="program-list__item">
          13:00<br />
    Vinterstudion
  </li>
        <li class="program-list__item">
          13:30<br />
    Alpint: VM
  </li>
        <li class="program-list__item">
          14:30<br />
    Vinterstudion
  </li>
      </ul>
    </Container>
  )
}

export default App;
