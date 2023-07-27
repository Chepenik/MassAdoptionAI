import React from "react";

const BtcMap = () => {
    return(
        <div style={{padding: 100}}>
                <iframe 
                    src="https://btcmap.org/map#5/39.43619/-93.25195"
                    width="100%"
                    height="500px"
                    style={{border: 'none'}}
                />
        </div>
    )
};

export default BtcMap;