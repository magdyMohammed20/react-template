import React, { useState, useEffect } from 'react';
import { WorkSection, WorkTitle } from './style'
import Card from '../../Public Components/Card'
import axios from 'axios'

const Work = () => {

    const [work, setWork] = useState([])

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('Api/data.json')
            setWork(result.data.works)
        }

        fetchData()

    }, []);

    const all = work.length > 0 ?
        work.map(workItem => {
            return (
                <div className='col-4' key={workItem.id}>
                    <Card icon={workItem.icon_name} title={workItem.title} desc={workItem.body} />
                </div>
            )
        })
        : '';

    return (
        <WorkSection className='pt-4'>
            <div className='container'>
                <WorkTitle>My Work</WorkTitle>
                <div className='row mt-5'>
                    {
                        all
                    }
                </div>
            </div>
        </WorkSection>
    );
};

export default Work;