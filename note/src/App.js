import logo from './logo.svg';
import {BrowserRouter, Router, Route, Routes} from 'react-router-dom' 
import NoteIndex from './components/NoteIndex';
import NewNote from './components/NewNote';
import NotePage from './components/NotePage';
import './App.css';

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NoteIndex/>}></Route>
      <Route path='/new-note' element={<NewNote/>}></Route>
      <Route path='/:title' element={<NotePage/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
