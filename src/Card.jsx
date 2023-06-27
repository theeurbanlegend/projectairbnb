
function Cards(props){
    return(
        
        <div className="Card">
            
            <img src={props.mainImg} className='Cardphoto'/>
            <div className="star-content">
                <img src="../star.png" className="Card-star"/> 
                <p>{props.stats.rating}<span className="star-des">({props.stats.reviews})&#8226;{props.location}</span></p>
            </div>
            <p>{props.description}</p>
            <p><span>From ${props.price}</span> / person</p>
        </div>
        
    )
}
export default Cards