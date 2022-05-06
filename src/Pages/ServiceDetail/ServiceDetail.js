import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetail = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h2>Welcome to Details: {serviceId} </h2>
            <div className='text-center'>
                <Link to='/checkout'>
                    <button className='btn btn-danger'>Proceed Checkout</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceDetail;