import React, { useEffect } from "react";
import Link from "../shared/link";
// import getFromLocalStorage from "../../helpers/get-from-local-storage";
import saveToLocalStorage from "../../helpers/save-to-local-storage";
import { SELECTED_INVENTORY } from "../constants/app-constants";
import { withRouter } from 'react-router-dom';

const Header = ({
    inventoryTypes,
    getInventoryTypesConnect,
    history
}) => {

    useEffect(() => {
        getInventoryTypesConnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onInventoryTypeClick = (e, item) => {
        if (item === 'All') {
            saveToLocalStorage(SELECTED_INVENTORY, item);
            history.push('/');
        }
        if (item === 'Manage') {
            history.push('/manage-inventory');
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
                    inventoryTypes.map((item,index) => {
                        return (
                            item && 
                        <>
                            <Link
                                key={`item_${index}`}
                                item={item}
                                text={item}
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
