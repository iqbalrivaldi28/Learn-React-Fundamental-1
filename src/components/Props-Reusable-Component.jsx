const PropsReusableComponent = (props) => {
  const { title, name, hobby} = props;

  return (
    <>
      <div>
        <button>{title}</button>
      </div>
      <div>
        <h4>Hallo nama saya {name}</h4>
        <h5>Saya hobby saya {hobby}</h5>
      </div>
    </>
  );
};

export default PropsReusableComponent;
