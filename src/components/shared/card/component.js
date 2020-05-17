import React, { useState } from "react";
import "./card.css";
import InputText from "../input-text";

const Card = ({
    index,
    type = "",
    title = "",
    // fields = [],
    onChange = () => {}
}) => {

    const [objectType, setObjectType] = useState(type);
    const [objectTitle, setObjectTitle] = useState(title);

    const onTypeChange = (e) => {
        const { target: { value } } = e;
        setObjectType(value);
        onChange(index, 'type', value);
    };

    const onTitleChange = (e) => {
        const { target: { value } } = e;
        setObjectTitle(value);
        onChange(index, 'title', value);
    };

    // const onFieldItemChange = (e) => {};

    return (
        <div className="card">
            <div className="card-body">
                {/* <h5 class="card-title">Object Type</h5>
                <h5 class="card-title">{type}</h5>
                <h5 class="card-title">Object Title</h5>
                <h5 class="card-title">{title}</h5> */}
                <InputText
                    text="Object Type"
                    onChange={onTypeChange}
                    value={objectType}
                />
                <InputText
                    text="Object Title"
                    onChange={onTitleChange}
                    value={objectTitle}
                />
            </div>
            {/* {
                fields.map(item => {
                    const {label} = item || {};
                    return (
                        <InputText
                            text={label}
                            onChange={onFieldItemChange}
                            value={label}
                        />
                    );
                })
            } */}
            {/* <ul class="list-group list-group-flush">
                <li class="list-group-item">Cras justo odio</li>
                <li class="list-group-item">Dapibus ac facilisis in</li>
                <li class="list-group-item">Vestibulum at eros</li>
            </ul>
            <div class="card-body">
                <a href="#" class="card-link">Card link</a>
                <a href="#" class="card-link">Another link</a>
            </div> */}
        </div>
    );
};

export default Card;
