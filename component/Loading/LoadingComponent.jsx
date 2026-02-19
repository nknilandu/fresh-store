import React from 'react';

const LoadingComponent = () => {
    return (
        <div>
            <div className='mx-auto w-fit h-[50vh] flex items-center'>
            <span className="loading loading-bars loading-xl text-green-500"></span>
        </div>
        </div>
    );
};

export default LoadingComponent;