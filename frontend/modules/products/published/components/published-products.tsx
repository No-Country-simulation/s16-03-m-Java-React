
import PublishedCard from "./published-card";
import { PublishedType } from "../constants/published-data";

const PublishedProducts = () => {
    const data: PublishedType = {
        image: "/images/Published1.png",
        title: "Product Title"
    };
    
    return (
        <div>
            <div>
                <h1>Recién Llegados</h1>
                <PublishedCard data={data} />   
            </div>
            <div>
                <h1>Los más vendidos</h1>
                <PublishedCard data={data} /> 
            </div>
            <div>
                <h1>Descuentos</h1>
                <PublishedCard data={data} /> 
            </div>
        </div>
    )
}

export default PublishedProducts;