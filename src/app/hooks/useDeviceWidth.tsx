import React, { useState, useEffect } from 'react';

const useDeviceWidth = () => {
    
    const [windowWidth, setWindowWidth] = useState<number>( 0 );


    useEffect( () => {


        function updateWidth () {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', updateWidth);

        updateWidth();

        return () => {
            window.removeEventListener('resize', updateWidth);
          };

    },[])

    

    return windowWidth;
};

export default useDeviceWidth;