import React, { useEffect, useState } from 'react';
import Club from '../Club/Club';
import './Shop.css';
import Cart from '../Cart/Cart.jsx';

const Shop = () => {

    const [clubs,  setClubs] = useState([]);


    const [ cart , setCart] = useState([]);

    const handleAddClub = (club) =>{
        const newCart = [...cart,club];
        console.log(club);
        setCart(newCart);
    };

    useEffect( () => {
        fetch('generated.json')
        .then(res => res.json())
        .then(data => setClubs(data))
    },[])
    return (
        <div className='shop-container'>
            
            <div className='row'>
                <div className='col-md-9'>
                    <div className='row'>
                        {
                            clubs.map(club => <Club 
                                key = {club.id}
                                club={club}
                                handleAddClub={handleAddClub}
                            ></Club>)
                        }
                    </div>
                </div>
                <div className='col-md-3'>
                    <Cart cart={cart}></Cart>
                </div>  
            </div>
        </div>
    );
};

export default Shop;