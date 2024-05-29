import ConditionalRederingIfElse from './components/Conditional-Rendering-IfElse';
import EventHandler from './components/Event-Hanlder';
import JsxNonJsx from './components/Jsx-NonJsx';
import PropsReusableComponent from './components/Props-Reusable-Component';
import UseStateConcepts from './components/UseState-Concepts';
import VariableInJsx from './components/Variable-In-Jsx';

function App() {
  return (
    <>
      {/* Jsx vs Non Jsx */}
      <JsxNonJsx />


      <hr />
      <VariableInJsx />
      
      <hr />
      <PropsReusableComponent title="Kirim Data" />
    
      <PropsReusableComponent title="Share Data" hobby="catur" />

      <PropsReusableComponent title="Biodata" name="rangga" hobby="Sepak bola" /> 


      <hr />
      <EventHandler name="Cinta " />

      <hr />
      <UseStateConcepts />

      <hr />
      <ConditionalRederingIfElse />
  
    </>
  );
}

export default App;
