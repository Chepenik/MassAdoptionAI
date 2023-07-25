import React from "react";

const BtcMap = () => {
    return(
        <div>
                <iframe 
                    src="https://btcmap.org/"
                    width="100%" 
                    height="500px"
                    style={{border: 'none'}}
                />
        </div>
    )
};

export default BtcMap;