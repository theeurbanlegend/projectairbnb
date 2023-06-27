import Cards from "./Card"
import content from "../content"
function Cardinfo(){
    const cards=content.map((data)=>{
        return(
            <div>
                <Cards 
                    key={data.id}
                    imgmain={data.mainImg}
                    starimg="../star.png"
                    rating={data.stats.rating}
                    reviews={data.stats.reviews}
                    origin={data.location}
                    desc= {data.description}
                    pricing={data.price} 
                    />
                
            </div>
        )
    })
   
return(
    <div className="Cards">
        {cards}
        
    </div>
)
}
export default Cardinfo
 