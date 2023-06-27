
function Cards(props){
    return(
        <div className="Card">
            <img src={props.imgmain} className='Cardphoto'/>
            <div className="star-content">
                <img src={props.starimg} className="Card-star"/> 
                <p>{props.rating}<span className="star-des">({props.reviews})&#8226;{props.origin}</span></p>
            </div>
            <p>{props.desc}</p>
            <p><span>From ${props.pricing}</span> / person</p>
        </div>
    )
}
export default Cards