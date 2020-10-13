import React from 'react'
import Button from '@material-ui/core/Button';
export default function learn(){
    return(
        <div className='learn'>
            <div className='Content'>
            <div className='item'>
                <h3>Sustainability</h3>
                <p>Learn to be more sustainable</p>
                <Button>Camp</Button>
            </div>
            <div className='item'>
                <h3>Botany</h3>
                <p>Plant Facts</p>
                <Button>Recharge</Button>
            </div>
            <div className='item'>
                <h3>Mycology</h3>
                <p>Mush mush Mushroom </p>
                <Button>Lodge</Button>
            </div>
            </div>
        </div>
    )
}