import logo from './logo.svg';
import './App.css';
import PakagingList from './PakagingList';
import ListRender from './ListRender';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <PakagingList/> */}
        <ListRender/>
      </header>
    </div>
  );
}

export default App;
