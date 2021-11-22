import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Div } from './Style'
const Home = () => {
    let url = 'https://api.github.com/users/MarianeCaldeira'

    const [data, setData] = useState([])

    useEffect(() => {
        axios.get(url).then(res => res.data)
        .then((res) => {
            setData(res)
        }).catch((err) => {
            console.log(err)
        })
    }, [])
    return (
        <Div>
            <div className='startInfo'>
                <h1>It's my github</h1>
                <h2>{data.name}</h2>
            </div>
            <div className="infoProfile">
                <img id="profile" src={data.avatar_url} alt={data.name} />
                <div>
                <p>{data.bio} <br />{data.location}</p>
                <p>Total de repositorios: {data.public_repos}</p>
                <p>Ver perfil no github: <a href='https://github.com/CleytonSousa' target='_blank'>Clique aqui</a></p>
                </div>
            </div>
            <div className='follow'>
                <p>Seguidores: {data.followers}</p>
                <p>Seguindo: {data.following}</p>
            </div>
        </Div>
    )
}

export default Home