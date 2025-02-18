import logo from './logo.svg';
import './App.css';
import A from './Component/A';
import RefExample from './Component/RefExample';
import FormExample from './Component/FormExample';
import Student from './Component/Student';


function App() {
  return (
    <div className="App">

      <FormExample/>

      <hr/>

      <Student/>

    
      <h1>React</h1>
      
      <hr/>

      <A/>
      <RefExample/>
      <hr/>

    
    </div>
  );
}

export default App;
