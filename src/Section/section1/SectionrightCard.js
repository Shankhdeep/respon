import React from 'react';
import def from './def.jpg';

function SectionrightCard(props) {
    var st="The news media or news industry are forms of mass media that focus on delivering news to the general public or a target public."
    
    const  isCreator=(s)=>{
        if(s==null) return "Unknown";
        else{
            return s[0];
        }
   }
    const isText=( s)=>{
        if(s==null)return s;
        else if(s.length>=50) return s.substring(0,50);
        else return s;
        
  
      }
      const isDescription=( s)=>{
         if(s==null){
             return st;
         }else if(s.length>=70) return s.substring(0,70);
         else return s;
      }
    return (
        <div className="pov-card" style={{minHeight:"0rem", marginTop:"2rem", paddingTop:"1rem",position:"relative", display:"inline-block" }}>
            <h4 style={{ fontSize: "15px", marginLeft: "6px",marginRight: "8px", display: "inline-block", fontWeight:"600" }}>Pov <div style={{ background: "red", display: "inline-block", width: "240px", height: "3.5px", marginBottom:"3px", marginLeft:"10px" }}></div></h4>
           { props.data?(
            <div className="row">
             
                <div className="pov-card-right col-md-12">
                    <div className='top-card' style={{ width: "17.3rem",marginLeft:"11px" }}>
                        <img src={props.data[0].image_url} className='img-fluid' style={{minWidth:"16rem"}} alt="" />
                        <div className="card-body">
                            <h6 className="card-title " style={{fontSize:"13px",marginLeft:"-10px"}}>
                               {isText(props.data[0].title)}
                            </h6>
                            <h6 className='card-title' style={{fontSize:"13px",marginLeft:"-10px"}}>{isDescription(props.data[0].description)}</h6>
                            <span className='card-logo'><i className="fa-solid fa-circle-user"></i> <span className="logo-text">{isCreator(props.data[0].creator)}</span></span>
                        </div>
                    </div>
                </div>

                <div className="pov-card-right-reader-editor col-md-12 my-4" style={{marginTop:"5px"}}>
                <div  style={{width:"18rem"}}>
                <h4 style={{ fontSize: "15px", marginLeft: "6px", display: "inline-block" }}>Reader Editors<div style={{ background: "red", display: "inline-block", width: "160px", height: "3.5px",marginLeft:"10px", marginBottom:"3px"}}></div></h4>
                            <div style={{width:"18rem",marginLeft:"15px"}}>
                            
                               <p style={{fontSize:"12px",fontWeight:500,marginLeft:"-7px", width:"18rem"}}>
                               {isDescription(props.data[1].description)}
                               {/* Lorem ipsum dolor elit. Placeat fugiat, maiores illo ratione impedit cumque architecto sint natus deserunt ab, similique ipsum quas, hic quam.
                               e architecto sint natus deserunt ab, e architecto sint natus deserunt ab,  e a */}
                               </p>
                            </div>
                </div>
                </div>
             
            </div>
         ):(<></>) }

        </div>
    )
}

export default SectionrightCard;