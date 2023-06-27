import Cards from "./Card"
import content from "../content"
function Cardinfo(){
    const cards=content.map((data)=>{
        return(
            <div>
                <Cards 
                    key={data.id}
                    item={data}
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
 