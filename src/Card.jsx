
function Cards(props){
    return(
        
        <div className="Card">
            
            <img src={props.item.mainImg} className='Cardphoto'/>
            <div className="star-content">
                <img src="../star.png" className="Card-star"/> 
                <p>{props.item.stats.rating}<span className="star-des">({props.item.stats.reviews})&#8226;{props.item.location}</span></p>
            </div>
            <p>{props.item.description}</p>
            <p><span>From ${props.item.price}</span> / person</p>
        </div>
        
    )
}
export default Cards