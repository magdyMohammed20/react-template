import React, { useEffect, useState } from 'react';
import axios from 'axios'
const Profile = () => {

    const [skills, setSkills] = useState([])

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('Api/data.json')
            setSkills(result.data.skills)
        }

        fetchData()

    }, []);

    const all = skills.length > 0 ?
        skills.map(skillsItem => {
            return (
                <div className='my-4' key={skillsItem.id}>
                    <div className='d-flex justify-content-between'>
                        <p>{skillsItem.skillName}</p>
                        <p>{skillsItem.percentage}</p>
                    </div>
                    <div className='w-100' style={{ backgroundColor: 'rgb(226, 226, 226)' }}>
                        <div style={{ height: '5px', backgroundColor: '#dc3545', width: skillsItem.percentage }}></div>
                    </div>
                </div>
            )
        })
        : '';


    return (
        <div className='pt-5'>
            <div className='container'>
                <div className='row mt-5'>
                    <div className='col-6'>
                        <h3>My Profile</h3>
                        <ul className='list-unstyled w-75 text-left mt-4'>
                            <li className='d-flex '>
                                <div className='font-weight-bold w-25'>Name</div>
                                <div className='text-muted w-75'>Magdy Mohammed</div>
                            </li>
                            <li className='my-2 d-flex '>
                                <div className='font-weight-bold w-25'>Birthday</div>
                                <div className='text-muted w-75'>14/06/1997</div>
                            </li>
                            <li className='d-flex '>
                                <div className='font-weight-bold w-25'>Address</div>
                                <div className='text-muted w-75'>Cairo</div>
                            </li>
                            <li className='my-2 d-flex '>
                                <div className='font-weight-bold w-25'>Phone</div>
                                <div className='text-muted w-75'>+02 01158685662</div>
                            </li>
                            <li className='d-flex '>
                                <div className='font-weight-bold w-25'>Email</div>
                                <div className='text-muted w-75'>magdymohammed37@yahoo.com</div>
                            </li>
                            <li className='my-2 d-flex '>
                                <div className='font-weight-bold w-25'>Website</div>
                                <div className='text-muted w-75'>MagdyMohammed.com</div>
                            </li>
                        </ul>
                    </div>
                    <div className='col-6'>
                        <h2>Some Skills</h2>
                        <p className='text-muted mt-4'>Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts.</p>
                        {all}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;