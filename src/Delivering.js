import React from 'react'
import img11 from "./assets/11.png";
import img22 from "./assets/22.png";

export default function Delivering() {
    return (
        <div className='flex justify-between'>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <img src={img11} alt="Question Mark" style={{ width: '20px', height: '20px' }} />
                <span style={{ marginLeft: '5px' }}>Delivering Excellence</span>
                <img src={img22} alt="Question Mark" style={{ width: '20px', height: '20px', marginLeft: '5px' }} />
            </div>
        </div>
    )
}
