import React from 'react';
import firstImg from '../../../assets/qZone1.png'
import secondImg from '../../../assets/qZone2.png'
import thirdImg from '../../../assets/qZone3.png'

const Q_Zone = () => {
    return (
        <div className='bg-secondary bg-opacity-25 mt-4 text-center py-3 rounded'>
             <h4 className='text-start ms-2 fw-bold'>Q-Zone</h4>
             <div className='mx-auto'>
                 <img style={{width:"90%"}} src={firstImg} alt="" />
                 <img style={{width:"90%"}} src={secondImg} alt="" />
                 <img style={{width:"90%"}} src={thirdImg} alt="" />
             </div>
        </div>
    );
};

export default Q_Zone;