import React from 'react'

import Face from './Face';
import Manager from './Manager';

const Main = () => {
    return (
        <div className='mx-auto'>
            <div className='flex flex-col min-h-screen'>
                <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
                
                <Face/>
                <Manager/>
            </div>
        </div>
    )
}

export default Main