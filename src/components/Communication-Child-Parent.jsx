const CommunicationChildParent = () => {
  const onCreate = () => {
    console.log('ini Console dari Parent');
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <ChildComponent onCreate={onCreate} />
    </div>
  );
};

//? Child Component
const ChildComponent = (props) => {
  const { onCreate } = props;

  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={onCreate}>Call Parent Function</button>
    </div>
  );
};


export default CommunicationChildParent;
