import React, { useEffect } from "react";
import Card from "./Card";
import { CardData } from "../../data/CardData";

const CardHeader = () =>{
    return(
        <div>
            <div className="card-container">
                {CardData.map((value, index) =>{
                    return(
                        <Card key={index}
                            path={value.path}
                            longTitle={value.longTitle}
                            title={value.title}
                            details={value.details}
                        />
                    );
                })}
            </div>
        </div>
    );
}

export default CardHeader;