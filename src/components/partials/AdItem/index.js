import React from "react";
import { createDispatchHook } from "react-redux";
import { Link, useLinkClickHandler } from "react-router-dom";
import { Item } from './styled';

export const AdItem = (props) => {
    let price = '';

    if(props.data.priceNegotiable) {
        price = 'Preço Negociável';
    } else {
        price = `R$ ${props.data.price}`;
    }

    return (
        <Item className="aditem">
            <Link to={`/ad/${props.data.id}`}>
                <div className="itemImage">
                    <img src={props.data.image} alt=""/>
                    { props.data.images && props.data.images.map((i, k) => 
                        <>
                            <img key={k} src={`http://alunos.b7web.com.br:501/media/${i.url}`} />
                        </>
                    )}
                    
                </div>
                <div className="itemName">{props.data.title}</div>
                <div className="itemPrice">{price}</div>
            </Link>
        </Item>
    );
}
export default AdItem;

