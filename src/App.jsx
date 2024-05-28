import './App.css';
import JsxNonJsx from './components/Jsx-NonJsx';
import PropsReusableComponent from './components/Props-Reusable-Component';
import VariableInJsx from './components/Variable-In-Jsx';

function App() {
  return (
    <>
      {/* Jsx vs Non Jsx */}
      {/* <JsxNonJsx /> */}

      {/* Variabel in Jsx */}
      {/* <VariableInJsx /> */}

      {/* Props dan Reusable Component */}
      <PropsReusableComponent title="Kirim Data" />
      <br />
      <PropsReusableComponent title="Share Data" hobby="catur" />

      <br />
      <PropsReusableComponent title="Biodata" name="rangga" hobby="Sepak bola" />
  
    </>
  );
}

export default App;
