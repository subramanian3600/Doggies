import React, {useState,useEffect } from 'react';
import axios from 'axios'
import LoadingPage from './loading'
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";

function Breed(){
    const url='https://api.thedogapi.com/v1/breeds';
    const [breeds,setBreeds]=useState({
        loading:false,
        data:null,
        error:false,
    })

    let content=null

    useEffect(()=>{
        setBreeds({
            loading:true,
            data:null,
            error:false,
        })
        axios.get(url)
            .then(response=>{
                setBreeds({
                    loading:false,
                    data:response.data.splice(0,256),
                    error:false,
                })
            })
    },[url])
    if(!breeds.data){
        return (
            <LoadingPage />
        )
    }
    if (breeds.data){
        content=
        breeds.data.map((breed,key)=>
        <div className="breed_list">
        <CardGroup>
        <Card style={{ width: '20rem' }}>
            <Card.Img variant="top" src={breed.image.url} />
            <Card.Body>
                <Card.Title><a href={`/breeds/breedinfo/${breed.id}`} className="breed_name">{breed.name}</a></Card.Title>
            </Card.Body>
        </Card>
        </CardGroup>
        </div>
        )
    }
    
    return (
        <React.Fragment>
        <div><header><h2>Breeds</h2></header></div>
        <div>{content}</div>
        </React.Fragment>
    )
}

export default Breed;