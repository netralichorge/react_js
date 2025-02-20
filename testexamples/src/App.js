import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  return (
    <div className="App">

      <Navbar />

      <h1 className='text-center'>Welcome User</h1>

      <div class="card-group">
        <Card title="XYZ" description="dummy description"/>
        <Card title="PQR" description="dummy description"/>
        <Card title="ABC" description="dummy description"/>
        

        <Card />
        <Card />
        <Card />

        <Card />
        <Card />
        <Card />
        <Card />



      </div>
    </div>
  );
}

export default App;
