
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Student from './components/Student';
import Teacher from './components/Teacher';
import Demo from './components/Demo';
import Practice from './components/Practice';
import ChangeName from './components/ChangeName';
import ChangeYear from './components/ChangeYear';
import Counter from './components/Counter';
import EvenOdd from './components/EvenOdd';
import DisplayName from './components/DisplayName';
import LoggedIn from './components/LoggedIn';

function App() {
  return (
    <div className="App">
      <LoggedIn/>
      <h1>Hello</h1> 
      
      <Header/>
      <Footer/>
      <Student id={101} name="Priti"/>
      <Student id={102} name="Sanika"/>

      <Teacher teacherId={21} teacherName="xyz"/>

      <Demo message="Happy New Year" year="2024"/>
      <Practice/>
      <ChangeName/>
      <ChangeYear/>
      <EvenOdd/>
      <Counter/>
      <DisplayName/>
      
    
    </div>
  );
}

export default App;
