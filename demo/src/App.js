import logo from './logo.svg';
import './App.css';
import A from './Component/A';
import RefExample from './Component/RefExample';
import FormExample from './Component/FormExample';
import Student from './Component/Student';
import useInternet from './useInternet';
import Parent from './Component/Parent';


function App() {

  let internetStatus = useInternet();
  return (
    <div className="App">

      <h1>
        {internetStatus?"You are online":"You are offline"}
      </h1>

      <hr/>
      <Parent/>

      <hr/>

    
      <FormExample/>

      <hr/>

      <Student/>
      <hr/>
    
      <h1>React</h1>
      
      <hr/>

      <A/>
      <RefExample/>
      <hr/>

    
    </div>
  );
}

export default App;
