import ConditionalRederingIfElse from './components/Conditional-Rendering-IfElse';
import ConditionalRenderingTernaryOperator from './components/Conditional-Rendering-Ternary-Operator';
import EventHandler from './components/Event-Hanlder';
import HandleForm from './components/HandleForm';
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

      <hr />
      <ConditionalRenderingTernaryOperator />

      <hr />
      <HandleForm />
  
    </>
  );
}

export default App;
