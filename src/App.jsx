import './App.css';
import EventHandler from './components/Event-Hanlder';
import JsxNonJsx from './components/Jsx-NonJsx';
import PropsReusableComponent from './components/Props-Reusable-Component';
import VariableInJsx from './components/Variable-In-Jsx';

function App() {
  return (
    <>
      {/* Jsx vs Non Jsx */}
      <JsxNonJsx />
      <hr />

      {/* Variabel in Jsx */}
      <VariableInJsx />
      <hr />

      {/* Props dan Reusable Component */}
      <PropsReusableComponent title="Kirim Data" />
    
      <PropsReusableComponent title="Share Data" hobby="catur" />

      <PropsReusableComponent title="Biodata" name="rangga" hobby="Sepak bola" /> 


      <hr />
      {/* Event Handler */}
      <EventHandler name="Cinta " />

      <hr />
  
    </>
  );
}

export default App;
