import React, { useState, useEffect } from "react";
import Link from "../shared/link";
// import getFromLocalStorage from "../../helpers/get-from-local-storage";
import saveToLocalStorage from "../../helpers/save-to-local-storage";
import { SELECTED_INVENTORY } from "../constants/app-constants";
import { withRouter } from 'react-router-dom';

const Header = ({
    isChanged,
    inventoryData,
    getInventoryTypesDataConnect,
    resetManageInventoryByKeyConnect,
    history
}) => {

    const [linksData, setLinksData] = useState([]);

    useEffect(() => {
        getInventoryTypesDataConnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    useEffect(() => {
        const dynamicLinks = inventoryData.map(item => item.type && item.type.trim() && item);
        setLinksData(dynamicLinks);
        if (isChanged) {
            resetManageInventoryByKeyConnect('isChanged', false);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [inventoryData, isChanged]);

    const onInventoryTypeClick = (e, item) => {
        if (item === 'All') {
            saveToLocalStorage(SELECTED_INVENTORY, 'ALL');
            history.push('/');
        }
        if (item === 'Manage') {
            history.push('/manage-inventory');
        }
        if (item && item.type && item.type.trim() && item.route) {
            saveToLocalStorage(SELECTED_INVENTORY, item.type.trim());
            history.push(item.route);
        }
    };
  
    return (
        <>
            <div>Inventory Types:&nbsp;
                <Link
                    item='All'
                    text='All'
                    onClick={onInventoryTypeClick}
                />&nbsp;
                {
                    linksData.map((item, index) => {
                        return (
                            <>
                                <Link
                                    key={`item_${index}`}
                                    item={item}
                                    text={item.type}
                                    onClick={onInventoryTypeClick}
                                />&nbsp;
                            </>
                        );
                    })
                }
                <Link
                    item='Manage'
                    text='Manage'
                    onClick={onInventoryTypeClick}
                />
            </div>
        </>
    );
};

export default withRouter(Header);
