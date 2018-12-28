import React, { Component } from 'react';
import Sky from 'react-sky';

// you can pass imported images to Sky
// import myImage from "./media/myImage.png"

class mySky extends Component {
    render() {
        return (
            <div>
                {/* Sky adapts size to its container */ }
                <Sky
                    images={{
                        /* FORMAT AS FOLLOWS */
                        0: "https://image.flaticon.com/icons/svg/135/135644.svg",  /* You can pass as many images as you want */
                        1: "https://image.flaticon.com/icons/svg/135/135591.svg",
                        2: "https://image.flaticon.com/icons/svg/135/135629.svg", /* you can pass images in any form: link, imported via webpack... */
                        3: "https://image.flaticon.com/icons/svg/135/135687.svg" 
                        /* 4: your other image... */
                        /* 5: your other image... */
                        /* ... */
                    }}
                    how={130} /* Pass the number of images Sky will render chosing randomly */
                    time={60} /* time of animation */
                    size={'50px'} /* size of the rendered images */
                    background={'gray'} /* color of background */
                />
            </div>
        );
    }
}

export default mySky;