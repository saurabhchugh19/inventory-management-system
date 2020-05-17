import React, { useEffect } from "react";
import Button from "../../components/shared/button";
import Card from "../../components/shared/card";
import getUid from "../../helpers/generate-uid";

const ManageInventory = ({
    data,
    getInventoryTypesDataConnect,
    addInventoryTypeConnect,
    updateInventoryTypeConnect,
    removeInventoryTypeConnect
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
            fields: [],
            route: getUid()
        };
        addInventoryTypeConnect(newType);
    };

    const removeType = (index) => {
        const newList = data.filter(item => item.index !== index);
        newList.forEach((item, index) => {
            item.index = index;
        });
        removeInventoryTypeConnect(newList);
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
                        <>
                            <Card
                                key={index}
                                index={index}
                                type={type}
                                title={title}
                                fields={fields}
                                onChange={onChange}
                            />
                            <Button
                                key={`remove_${item}`}
                                ctaText={`Remove`}
                                onClick={() => removeType(index)}
                            />&nbsp;
                        </>
                    );
                })}
            </div>
        </>
    );
};

export default ManageInventory;
