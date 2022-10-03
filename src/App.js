
import './App.css';
import CardGroup from './Component/CardGroup/CardGroup';
import { Button, Spinner } from 'react-bootstrap';
import GridCard from './Component/GridCard/GridCard';

function App() {
  return (
    <div className="App">
      <CardGroup></CardGroup>
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-secondary">Secondary</button>
      <button type="button" className="btn btn-success">Success</button>
      <button type="button" className="btn btn-danger">Danger</button>
      <button type="button" className="btn btn-warning">Warning</button>
      <button type="button" className="btn btn-info">Info</button>
      <button type="button" className="btn btn-light">Light</button>
      <button type="button" className="btn btn-dark">Dark</button>
      <button type="button" className="btn btn-link">Link</button>
      <div className="spinner-border text-danger" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
      <button>Plain Button</button>
      <Button>React Button</Button>
      <Button variant='success'>React Button</Button>
      <Button variant='info'>React Button</Button>
      <div>
      <Spinner animation="grow" variant="primary" />
      <Spinner animation="grow" variant="secondary" />
      <Spinner animation="grow" variant="success" />
      <Spinner animation="grow" variant="danger" />
      <Spinner animation="grow" variant="warning" />
      <Spinner animation="grow" variant="info" />
      <Spinner animation="grow" variant="light" />
      <Spinner animation="grow" variant="dark" />
      </div>
      <div>
        <GridCard></GridCard>
      </div>
    </div>
  );
}

export default App;
