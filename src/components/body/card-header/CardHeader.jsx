import React from "react";
import Card from "./Card";
import { CardData } from "../../data/CardData";

const CardHeader = () =>{
    return(
        <div className="card-container">
                {CardData.map((value, index) =>{
                    return(
                        <Card key={index}
                            path={value.path}
                            longTitle={value.longTitle}
                            title={value.title}
                            details={value.details}
                            page={value.page}
                        />
                    );
                })}
        </div>
    );
}

export default CardHeader;