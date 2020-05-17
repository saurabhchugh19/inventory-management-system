import React, { useState, useEffect } from "react";
import Button from "../../components/shared/button";
import ItemCard from "../../components/item-card";
import getFromLocalStorage from "../../helpers/get-from-local-storage";
import saveToLocalStorage from "../../helpers/save-to-local-storage";
import { SELECTED_INVENTORY } from "../../components/constants/app-constants";
// import NotFound from "../../components/not-found";

const Dashboard = ({
    data,
    filterType,
    inventoryData,
    getItemsConnect,
    addItemConnect,
    setByKeyConnect
}) => {

    const [addTypes, setAddTypes] = useState([]);
    const [showMessage, setShowMessage] = useState(false);
    const [showTypeList, setShowTypeList] = useState(false);

    useEffect(() => {
        getItemsConnect();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const savedFilter = getFromLocalStorage(SELECTED_INVENTORY);
        if (savedFilter) {
            setByKeyConnect('filterType', savedFilter);
        } else {
            setByKeyConnect('filterType', 'All');
            saveToLocalStorage(SELECTED_INVENTORY, 'All');
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        if (filterType !== 'All') {}
    }, [filterType]);

    useEffect(() => {
        const uniqueTypes = [];
        inventoryData.forEach(item => {
            if (item.type && item.type.trim()){
                uniqueTypes.push(item.type.trim());
            }
        });
        setAddTypes(uniqueTypes);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inventoryData]);

    useEffect(() => {
        if (showMessage && !addTypes.length) {
            window.setTimeout(() => {
                setShowMessage(false);
            }, 3000);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [showMessage]);

    const onAddType = () => {
        if (!addTypes.length) {
            setShowMessage(true);
        } else {
            setShowTypeList(true);
        }
    };

    // const getFieldValues = (type) => {};

    const addItem = (type) => {
        const itemType = inventoryData.find(item => item.type === type);
        if (itemType) {
            // const { fields } = itemType;
            const newItem = {
                index: data.length,
                type,
                // fieldValues: getFieldValues(type) // Need to add for field as per type (string, number, datetime etc)
            };
            addItemConnect(newItem);
        }
    };

    return (
        <>
            <div className="row">
                <Button
                    ctaText="Add Item"
                    onClick={onAddType}
                />&nbsp;
                {
                    showMessage && <span>Please add at least 1 type</span>
                }
                {
                    showTypeList &&
                    <ul>
                        {addTypes.map(item => {
                            return (
                                <>
                                    <Button
                                        key={item}
                                        ctaText={item}
                                        onClick={() => addItem(item)}
                                    />&nbsp;
                                </>
                            );
                        })}
                    </ul>
                }
            </div>
            <div className="row">
                {data.map(item => {
                    const { index, type, fields } = item || {};
                    return (
                        item && (filterType === 'All' || (filterType !== 'All' && type === filterType)) &&
                        <ItemCard
                            key={index}
                            index={index}
                            type={type}
                            fields={fields}
                        />
                    );
                })}
            </div>
        </>
    );
};

export default Dashboard;
