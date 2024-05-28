const VariableInJsx = () => {
    
    const name = "Rangga"
    const age = 22
    const hobby = ['Bola ', 'Basket ', 'Catur']

    return(
        <>
            <h3>Perkenalkan nama saya {name} dan usia saya {age}</h3>
            <h4>Hobby saya {hobby}</h4>
        </>
    )
}


export default VariableInJsx


//! Catatan
//? JSX hanya akan mengerti variable dengan tipe data String, Int dan <Nnmber></Nnmber>