import axios from "axios";
import React, { useState, useEffect } from "react";
import Card from '../Card/Card'

const Main = () => {
    const [name, setName] = useState('')
    const [pokemon, setPokemon] = useState({})
    const [visible, setVisible] = useState(false)

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const clickHandle = async (e) => {
        console.log(document)
        e.preventDefault()
        
        try {
            let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}/`)
            if (res) setPokemon(res.data)
        } catch (error) {
            setPokemon({})
        }finally{
            e.target.reset()
        }
    }

    useEffect(() => {
        if (pokemon.name) setVisible(true)
        else setVisible(false)
    }, [pokemon])

    return (
        <>
            <form action="" onSubmit={clickHandle}>
                <label htmlFor="pokemon">Introduce el nombre de un pokemon</label>
                <input type="text" name='pokemon' onChange={handleChange} />
                <button >Enviar</button>
            </form>

            {visible ? <Card data={pokemon} /> : <p>busca un pokemon</p>}
        </>
    )

}

export default Main