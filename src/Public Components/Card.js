import React from 'react';
import { CardTitle, CardIcon, CardBtn } from './style'

const Card = props => {
    return (
        <div>
            <div className="card shadow-sm text-center p-3">
                <CardIcon className={props.icon}></CardIcon>
                <div className="card-body">
                    <CardTitle className="card-title mt-3">{props.title}</CardTitle>
                    <p className="card-text mt-4 text-muted">{props.desc}</p>
                    <CardBtn className="btn mt-3">Show More</CardBtn>
                </div>
            </div>
        </div>
    );
};

export default Card;

