import React from 'react';
import expert1 from '../../../images/experts/expert-1.jpg'
import expert2 from '../../../images/experts/expert-2.jpg'
import expert3 from '../../../images/experts/expert-3.jpg'
import expert4 from '../../../images/experts/expert-4.jpg'
import expert5 from '../../../images/experts/expert-5.jpg'
import expert6 from '../../../images/experts/expert-6.png'
import Expert from '../Expert/Expert';

const experts = [
    { id: 1, name: 'jorgoe hanst', img: expert1 },
    { id: 2, name: 'johan chils', img: expert2 },
    { id: 3, name: 'wilson humble', img: expert3 },
    { id: 4, name: 'chalse hong', img: expert4 },
    { id: 5, name: 'griby job', img: expert5 },
    { id: 6, name: 'humest bari jon', img: expert6 },
]

const Experts = () => {
    return (
        <div>
            <div id='experts' className='container'>
                <h1 className='text-primary text-center'>OUR EXPERTS</h1>
                <div className="row">
                    {
                        experts.map(expert => <Expert
                            key={expert.id}
                            expert={expert}
                        ></Expert>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Experts;