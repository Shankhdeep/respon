import React from 'react';
import def from './def.jpg';
// import def from './def.jpg';

function SectionLeftCard(props) {
    var st="The news media or news industry are forms of mass media that focus on delivering news to the general public or a target public."
    
    const  isCreator=(s)=>{
        if(s==null) return "Unknown";
        else{
            return s[0];
        }
   }
    const isText=( s)=>{
      if(s==null)return s;
      else if(s.length>=95) return s.substring(0,95);
      else return s;
      

    }
    
    const isDescription=( s)=>{
        if(s==null){
            return st;
        }else if(s.length>=126) return s.substring(0,126);
        else return s;
     }
    return (
        
        <section className='top-heading'  style={{ marginTop:"2rem", paddingBottom:"2rem", paddingTop:"1rem" }} >
            <h4 style={{ fontSize: "1rem", marginLeft: "10px", display: "inline-block", fontWeight:"600" }}>Top Stories 
            <div className='line' style={{ background: "red", display: "inline-block", width: "16rem", height: "3.5px", marginBottom:"3px", marginLeft:"15px" }}></div></h4>
            {
                     props.data?(
                         <>
            <div className="row">
                <div className="col-md-6">
                 
                    <div className='card-left' style={{width: "24rem", height:"20rem", marginLeft: "1px"}}>
                        <img src={props.data[0].image_url} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h6 className="card-title"style={{ fontWeight:"600", width:"24rem" }}>{isText(props.data[0].title)}</h6>
                            <span ><i className="fa-solid-fa-circle-user"></i><span className="logo-text">{isCreator(props.data[0].creator)}</span>
                            </span>
                            <p className="card-text-my-2">{isDescription(props.data[0].description)}...</p>
                            

                        </div>
                    </div>
                  
                </div>
                <div className="col-md-6">

                    <div className=" card-right">
                        <div className="card-body-right-card">
                            <p>{isText(props.data[1].title)}</p>
                            <span className='card-logo'><i className="fa-solid fa-circle-user"></i> <span className="logo-text">{isCreator(props.data[1].creator)}</span></span>
                        </div>
                    </div>
                    <div className=" my-2 card-right">
                        <div className="card-body-right-card">
                            <p>{isText(props.data[2].title)}</p>
                            <span className='card-logo'><i className="fa-solid fa-circle-user"></i> <span className="logo-text">{isCreator(props.data[2].creator)}</span></span>
                        </div>
                    </div>
                    <div className="my-2 card-right">
                        <div className="card-body-right-card">
                            <p>{isText(props.data[3].title)}</p>
                            <span className='card-logo'><i className="fa-solid fa-circle-user"></i> <span className="logo-text">{isCreator(props.data[3].creator)}</span></span>
                        </div>
                    </div>
                    <div className=" my-2 card-right">
                        <div className="card-body-right-card">
                            <p>{isText(props.data[4].title)}
                            </p>
                            <span className='card-logo'><i className="fa-solid fa-circle-user"></i><span className="logo-text">{isCreator(props.data[4].creator)}</span></span>
                        </div>
                    </div>

                    <div className="my-2 card-right">
                        <div className="card-body-right-card">
                            <p>{isText(props.data[5].title)}
                            </p>
                            <span className='card-logo'><i className="fa-solid-fa-circle-user"></i><span className="logo-text">{isCreator(props.data[5].creator)}</span></span>

                        </div>
                    </div>

                </div>

            </div>
            </> ):(<></>)
                 }

        </section>

    )
}

export default SectionLeftCard;