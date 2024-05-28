const EventHandler = (props) => {
  const { name } = props;

  const handleClick = (name) => {
    alert(`Hai, salam kenal ${name}`);
  };

  return (
    <>
      <div>
        <p>Hello my name is, {name}</p>
      </div>
      <div>
        <button onClick={() => handleClick(name)}>Say hai to {name}</button>
      </div>
    </>
  );
};

export default EventHandler;
