import React from 'react';
import def from './def.jpg';

function Section4_right(props) {
    const isText=( s)=>{
        if(s==null)return s;
        else if(s.length>=116) return s.substring(0,116);
        else return s;
        
  
      }
    return (
        <div className='section4-right-main'>
            <h4 style={{ fontSize: "15px", marginLeft: "6px", display: "inline-block" }}>On camera<div style={{ background: "red", display: "inline-block", width: "22rem", height: "3.5px",marginLeft:"7px", marginBottom:"3px" }}></div></h4>
            { props.data?(
                <>
            <div className="row">
                <div className="col-md-6">
                    <div className="card"  style={{maxWidth:"23rem", marginLeft:"3px"}}>
                        <img src={props.data[0].image_url} onError={even=>{even.target.onerror = null; even.target.src={def}}} alt="" />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="card" style={{maxWidth:"23rem", marginRight:"3px"}}>
                        <img src={props.data[1].image_url} onError={(e)=>{e.target.onerror = null; e.target.src={def}}} alt="" />
                    </div>
                </div>
            </div>


            <div className="row">
                <div className="col-md-6">
                    {/* <div className="card-my-2" style={{maxWidth:"23rem", marginLeft:"3px"}}>
                        <img src={props.data[2].image_url} onError={(e)=>{e.target.onerror = null; e.target.src="./def.jpg"}} alt="" />
                    </div> */}
                </div>
                <div className="col-md-6">
                    <div className="card my-2" style={{maxWidth:"23rem",marginRight:"3px"}}>
                        <img src={props.data[3].image_url} onError={(e)=>{e.target.onerror = null; e.target.src="./def.jpg"}} alt="" />
                    </div>
                </div>
            </div>
            </>):(<></>)
    }

        </div>
    )
}

export default Section4_right;