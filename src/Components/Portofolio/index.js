import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { ImgContainer } from './style'

const Portofolio = () => {

    const [portofolio, setPortofolio] = useState([])

    useEffect(() => {
        async function fetchAboutData() {
            const result = await axios.get('Api/data.json')
            setPortofolio(result.data.portfolio)
        }

        fetchAboutData()
    }, []);

    const allAboutData = portofolio.length > 0 ?
        portofolio.map(portofolioItem => {
            return (
                <div className='col-4 my-2' key={portofolioItem.id}>
                    <ImgContainer>
                        <img src={portofolioItem.image} className='w-100' />
                    </ImgContainer>
                </div>
            )
        })
        : '';


    return (
        <div className='pt-4'>
            <div className='container'>
                <h1>My Portofolio</h1>
                <div className='row mt-4'>
                    {allAboutData}
                </div>
            </div>
        </div>
    );
};

export default Portofolio;