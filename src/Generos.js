import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom' 

const Generos = () => {
    const [data, setData] = useState([])

    useEffect(() => {
        axios.get('/api/genres')
            .then(res => {
                setData(res.data.data)
            })
    }, [])

    const deleteGenero = id => {
        console.log(id)
        axios.delete(`/api/genres/${id}`)
            .then(res => {
                const filtrado = data.filter(item => item.id !== id)
                setData(filtrado)
            })
    }
    
    const renderizaLinha = record => {
        return (
            <tr key={record.id}>
                <th scope="row"> {record.id} </th>
                <td>{record.name}</td>
                <td>
                    <button onClick={() => deleteGenero(record.id)} className="btn btn-danger mr-4" > Remover </button>
                    <Link to={`/genero/${record.id}`} className="btn btn-warning"> Editar </Link>
                </td>
            </tr>
        )
    }

    if(data.length === 0) {
        return (
            <div className="container">
                <h1>Generos</h1>
                <div className="alert alert-warning" role="alert">
                    Você não possui genêros criados.
                </div>
                <Link to="/genero/novo" className="btn btn-primary mt-4">Cadastrar genêro</Link>
            </div>
        )
    }

    return (
        <div className="container">
            <h1>Generos</h1>

            <table className="table">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Ações</th>
                    </tr>
                </thead>
                <tbody>
                    { data.map(renderizaLinha) }
                </tbody>
            </table>
            <Link to="/genero/novo" className="btn btn-primary mt-4">Cadastrar genêro</Link>

        </div>
    )
  }

export default Generos