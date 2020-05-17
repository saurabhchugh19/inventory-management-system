import React, { useState } from "react";
import "./item-card.css";
import InputText from "../shared/input-text";

const ItemCard = ({
    index,
    type,
    fields = [],
    onChange = () => {}
}) => {

    const [objectFields, setObjectFields] = useState(fields);

    const onFieldChange = (e, fieldKey) => {
        const { target: { value } } = e;
        onChange(index, fieldKey, value);
    };

    return (
        <div className="card">
            <div className="card-body">
                <span>{`${type}`}</span>
            </div>
        </div>
    );
};

export default ItemCard;
