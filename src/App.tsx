import { DragNDrop } from './components/DragNDrop';

function App() {
  return (
    <div className="container-main flex">
      <div className="title flex">
        <h1>Drag 'n Drop Todo</h1>
      </div>
      <DragNDrop />
    </div>
  );
}

export default App;
