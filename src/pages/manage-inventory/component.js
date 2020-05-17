import React, { useEffect } from "react";
import Button from "../../components/shared/button";
import Card from "../../components/shared/card";

const ManageInventory = ({
    data,
    getInventoryTypesDataConnect,
    addInventoryTypeConnect,
    updateInventoryTypeConnect
}) => {

    useEffect(() => {
        getInventoryTypesDataConnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const addType = () => {
        const newType = {
            index: data.length,
            type: "",
            title: "",
            fields: []
        };
        addInventoryTypeConnect(newType);
    };

    const onChange = (index, keyName, value) => {
        const item = data[index];
        if (item) {
            item[keyName] = value;
            updateInventoryTypeConnect(data);
        }
    };

    return (
        <>
            <div className="row">
                <Button
                    ctaText="Add Type"
                    onClick={addType}
                />
            </div>
            <div className="row">
                {data.map(item => {
                    const { index, type, title, fields } = item || {};
                    return (
                        item &&
                        <Card
                            key={index}
                            index={index}
                            type={type}
                            title={title}
                            fields={fields}
                            onChange={onChange}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default ManageInventory;
