import React from 'react';
import './Club.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Club = (props) => {
    // console.log(props.club);
    const {img,facebook,name,members,dept} = props.club || {};
    return (
        <div className='col-md-4 mt-3'>
                <div className='card card-component h-100 ' style={{width: "18rem"}}>
                    <img src={img} className="card-img-top" alt="" />
                    <div className="card-body card-body-container">
                        <h6 className="card-title"> Name: {name}</h6>
                        <p>Total Members: {members}</p>
                        <p>Department: {dept}</p>
                        <p>Total Cost: &#2547;{members * 500}</p>
                        <button  onClick={() =>props.handleAddClub(props.club)}> <FontAwesomeIcon icon={faCartShopping} /> Add Club</button>
                        <h2 className='mt-3'><a href={facebook} target='_blank' rel="noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></h2>
                    </div>
                </div>
        </div>
    );
};

export default Club;