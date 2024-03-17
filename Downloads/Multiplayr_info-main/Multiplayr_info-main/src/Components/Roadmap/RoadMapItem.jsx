import React from 'react';
import './Roadmap.css';
// import ListItem from './ListItem';

const RoadMapItem = ({ year, tag, list }) => {


    return (
        <>
            <div className="container-roadmap">
                <div className='roadmap-item'>
                    <div className="date">
                        <span>{year}</span>
                        <h4><b>{tag}</b></h4>
                    </div>
                    <ul>
                        {
                            list.map((li, id)=>{
                                return(
                                    <li key={id}>{li}</li>
                                )   
                            })
                            
                        }
                        
                        
                    </ul>

                </div>
          
            </div>
        </>
    );
};

export default RoadMapItem;