import { createTypes } from "reduxsauce";

export default createTypes(
    `
    GET_INVENTORY_TYPES_DATA_SUCCESS

    ADD_INVENTORY_TYPE

    UPDATE_INVENTORY_TYPE
`,
    {
        prefix: "manageinventory/"
    }
);
