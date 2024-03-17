import React from 'react';
import './Feature.css';


const Item = ({heading,Image,des}) => {
    return (
       
<>
{/* // <div> */}
            {/* <div className='feature-item '> */}
                <div className="single-item   ">
                    <img src={Image} alt='' />
                    <h3>{heading}</h3>
                    <p>
                        {des.length<90? des:des}
                    </p>
                    {/* <a href='#' className='read-more'> Read more</a> */}

                </div>


            {/* </div> */}
            {/* </div> */}
</>
       
    );
};

export default Item;