import React, { useState } from 'react';

function HandleForm() {
  const [name, setName] = useState('');

  const handleOnChange = (e) => {
    setName(e.target.value); 
    console.log(`Handle On Change: ${name}`);
  };


  const handldeSubmit = (e) =>{
    e.preventDefault(); //? Sebelum logic atau inisiate script di onSubmit harus prevent default dulu
    console.log(`Handle On Submit: ${name}`);

  }

  return (  
    <div>
      <form onSubmit={handldeSubmit}>
        <label htmlFor="">Nama: </label>
        <input type="text" placeholder="Masukan nama" onChange={handleOnChange} value={name} />
      </form>
    </div>
  );
}

export default HandleForm;
