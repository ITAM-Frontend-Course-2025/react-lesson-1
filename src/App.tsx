import Header from './components/Header/Header';
import About from './components/About/About';
import Favorite from './components/Favorite/Favorite';
import Contacts from './components/Contacts/Contacts';
import './App.css';

export default function App(){
  return (
    <div>
      <Header />
      <About />
      <Favorite/>
      <Contacts/>
    </div>
  )
}