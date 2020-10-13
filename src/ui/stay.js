import React from 'react'
import Button from '@material-ui/core/Button';

export default function stay(){
    return (<div className='stay'>
        <div className='content'>
            <div className='item'>
                <h3>Camping</h3>
                <p>We provide all the necessary gear to enjoy the amazing state of Colorado</p>
                <Button>Camp</Button>
            </div>
            <div className='item'>
                <h3>RV Parking</h3>
                <p>If you're traveling by a RV you can stay here</p>
                <Button>Recharge</Button>
            </div>
            <div className='item'>
                <h3>Cabin</h3>
                <p>Want more of a rustic vibe? Stay in our cozy cabin.</p>
                <Button>Lodge</Button>
            </div>
        </div>
        <img src='https://images.pexels.com/photos/4405241/pexels-photo-4405241.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'></img>

    </div>)
}