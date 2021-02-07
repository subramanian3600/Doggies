import React, {useState,useEffect } from 'react';
import axios from 'axios'
import { useParams, withRouter } from 'react-router-dom';
import LoadingPage from './loading'

function BreedInfo(){
    const { id } =useParams();
    const url=`https://api.thedogapi.com/v1/breeds/${id}`
    const [breedsinfo,setBreedsinfo]=useState([])

    useEffect(()=>{
        setBreedsinfo({
            loading:true,
            data:null,
        })
        axios.get(url)
            .then(response=>{
                setBreedsinfo({
                    data:response.data,
                    loading:false,
                })
            })
    },[url])
    if(!breedsinfo.data){
        return (
            <LoadingPage />
        )
    }
    if(breedsinfo.data){
        return (
        
        <div className="breedinfo_list">
            <h4 className="breedinfo_name">{breedsinfo.data.name}</h4>
            <h4 className="breedinfo_temp">{breedsinfo.data.temperament}</h4>
            <h4 className="breedinfo_life">Life Span : {breedsinfo.data.life_span}</h4>
            <h4 className="breedinfo_group">Breed Group : {breedsinfo.data.breed_group}</h4>
            <h4 className="breedinfo_origin">{breedsinfo.data.origin}</h4>
        </div> 
    )
    }
}

export default withRouter (BreedInfo);
