import React from 'react'
export default function shop(){
    return(
        <div className='shop'>
            <div className='content'>
                <div className='item'>
                    <h4>Substrates</h4>
                    <img src='jar' alt='jar'></img>
                    <p>Sterilized substrate</p>
                </div>
                <div className='item'>
                    <h4>Spores</h4>
                    <img src='jar' alt='jar'></img>
                    <p>Spores in a syringe ready to inoculate a substrate</p>
                </div>
                <div className='item'>
                    <h4>Lions Mane</h4>
                    <img src='jar' alt='jar'></img>
                    <p>Cognitive, and other health benefits</p>
                </div>
            </div>
            <img src='https://images.pexels.com/photos/2553002/pexels-photo-2553002.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'></img>

        </div>
    )
}