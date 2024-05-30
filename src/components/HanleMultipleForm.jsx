import { useState } from "react"

const HandldeMultiform = () => {
    const initialState = {
        name: "",
        hobby: "",
        agama: ""
    }

    const [data, setData] = useState(initialState)
    const {name, hobby, agama} = data;

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data);
        setData(initialState)
    }

    const handleChange = (e) => {
        setData ({...data, [e.target.name]: e.target.value})
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="">Name</label>
                <input type="text" onChange={handleChange} value={name} name="name" />
                <br />
                <label htmlFor="">Hobyy</label>
                <input type="text" onChange={handleChange} value={hobby} name="hobby" />
                <br />
                <label htmlFor="">Agama</label>
                <input type="text" onChange={handleChange} value={agama} name="agama" />
                <br />
                <button type="submit">Kirim Data</button>
            </form>
        </div>
    )
}

export default HandldeMultiform